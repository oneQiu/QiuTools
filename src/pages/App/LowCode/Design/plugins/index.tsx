// Low-Code自带插件
import { ILowCodePluginConfig, ILowCodePluginContext, plugins } from '@alilc/lowcode-engine';
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';
import ZhEnPlugin from '@alilc/lowcode-plugin-zh-en';
// import CodeGenPlugin from '@alilc/lowcode-plugin-code-generator';
import DataSourcePanePlugin from '@alilc/lowcode-plugin-datasource-pane';
import SchemaPlugin from '@alilc/lowcode-plugin-schema';
// import CodeEditor from '@alilc/lowcode-plugin-code-editor';
import ManualPlugin from '@alilc/lowcode-plugin-manual';
import Inject from '@alilc/lowcode-plugin-inject';
import SimulatorResizer from '@alilc/lowcode-plugin-simulator-select';
import EditorPlugin from './EditorPlugin';
import ComponentsPlugin from './ComponentsPlugin';
import SetterPlugin from './SetterPlugin';
import HeaderPlugin from './HeaderPlugin';
import CustomSetterPlugin from './CustomerSetterPlugin';

export type LowCodePluginFunc = (ctx: ILowCodePluginContext) => ILowCodePluginConfig;

export interface LowCodePlugin {
  (ctx: ILowCodePluginContext): {
    name: string;
    dep: any[];
    init: () => void;
  };
  pluginName: string;
}

const CommonEngine = async () => {
  // 低代码引擎生态元素项目内调试用插件
  await plugins.register(Inject);

  // 低代码插件手册
  await plugins.register(ManualPlugin);

  // 大纲物料初始化
  await plugins.register(EditorPlugin);

  // 组件库初始化
  await plugins.register(ComponentsPlugin);

  // 设置内置 setter 和事件绑定、插件绑定面板
  await plugins.register(SetterPlugin);

  // 头部
  await plugins.register(HeaderPlugin);

  // 自定义设置
  await plugins.register(CustomSetterPlugin);

  // 低代码Schema
  SchemaPlugin.pluginName = 'SchemaPlugin';
  await plugins.register(SchemaPlugin);

  // 模拟器选择
  (SimulatorResizer as LowCodePlugin).pluginName = 'SimulatorResizer';
  plugins.register(SimulatorResizer);

  // 注册回退/前进
  await plugins.register(UndoRedoPlugin);

  // 注册中英文切换
  await plugins.register(ZhEnPlugin);

  // 左侧数据源面板
  DataSourcePanePlugin.pluginName = 'DataSourcePane';
  await plugins.register(DataSourcePanePlugin);

  // 源码面板 webpack 5暂不支持
  // CodeEditor.pluginName = 'CodeEditor';
  // await plugins.register(CodeEditor);

  // 注册出码插件 暂不使用
  // CodeGenPlugin.pluginName = 'CodeGenPlugin';
  // await plugins.register(CodeGenPlugin);
};

export default CommonEngine;
