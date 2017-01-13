import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import filesize from 'rollup-plugin-filesize';

export default ({format, dest}) => {
  return {
    entry: 'src/main.js',
    format: format,
    dest: dest,
    moduleName: 'dagreD3',
    plugins: [
      nodeResolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      }),
      cleanup(),
      filesize(),
    ]
  }
};