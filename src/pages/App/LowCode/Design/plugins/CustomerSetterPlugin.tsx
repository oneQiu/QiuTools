import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import TitleSetter from '@alilc/lowcode-setter-title';

const CustomSetter = (ctx: ILowCodePluginContext) => {
  return {
    name: '___registerCustomSetter___',
    async init() {
      const { setters } = ctx;

      setters.registerSetter('TitleSetter', TitleSetter);
      // setters.registerSetter('BehaviorSetter', BehaviorSetter);
      // setters.registerSetter('CustomSetter', CustomSetter);
    },
  };
};
CustomSetter.pluginName = 'CustomSetter';
export default CustomSetter;
