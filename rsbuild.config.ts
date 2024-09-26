import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginVueJsx } from "@rsbuild/plugin-vue-jsx";

export default {
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginVue(),
    pluginVueJsx(),
  ],
};
