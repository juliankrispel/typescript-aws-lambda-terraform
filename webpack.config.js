const typescriptIsTransformer = require('typescript-is/lib/transform-inline/transformer').default
const path = require('path');
const { readdirSync } = require('fs');
const exec = require('child_process').execSync;

const dir = 'lambda-fns'
const entry = readdirSync(dir)
.filter(item => /\.(t|j)s$/.test(item))
.filter(item => !/\.d\.(t|j)s$/.test(item))
.reduce((acc, fileName) => ({
  ...acc,
  [fileName.replace(/\.(t|j)s$/, '')]: `./${dir}/${fileName}`
}), {})
const distFolder = 'dist'
const distPath = path.resolve(process.cwd(), distFolder)

module.exports = {
  entry,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: program => ({
            before: [typescriptIsTransformer(program)]
          })
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [ '.tsx', '.ts', '.js', '.json' ],
  },
  target: 'node',
  stats: 'minimal',
  optimization: {
    usedExports: true,
  },
  mode: 'production',
  plugins: [
    {
      apply: compiler => {
        compiler.hooks.done.tap(
          'ZipPlugin',
          (a,b,c) => {
            Object.keys(entry).forEach(name => {
              exec(`zip ${name}.zip -r ${name}.js`, { cwd: distPath })
            })
            exec(`rm *.js`, { cwd: distPath })
            console.info(
              'produced deployment packages:\n\n',
              Object.keys(entry).map(name => '  💾  ./' + path.join('./', distFolder, `${name}.zip`)).join('\n\n '),
              '\n'
            );
        });
      }
    }
  ]
};
