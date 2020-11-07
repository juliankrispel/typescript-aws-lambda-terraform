# Typescript AWS Terraform Starter

A boilerplate for developing serverless applications with typescript and terraform.

- ✅ [`webpack`](https://webpack.js.org/) to compile deployment packages.
- ✅ [`jest`](https://jestjs.io/) and for testing
- ✅ [`typescript-is`](https://github.com/woutervh-/typescript-is) to validate event input
- ✅ Minimal [terraform](terraform.io) configuration to manage deployment.

### Prerequisites:

- [terraform](terraform.io)
- [The AWS cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).

I believe both can be installed via brew (`brew install terraform aws)

## Commands

- `npm run build` - Turns all typescript files in `lambda-fns` into lambda deployment packages (To deploy run )
- `npm run test` - Runs all tests
- `npm run test:watch` - Rerun tests when files change
- `npm run plan` - Display terraform deployment plan. Shows you what AWS resources will be created.
- `npm run deploy` - Deploys project to aws with terraform
- `npm run destroy` - Tear down project on aws with terraform


### Adding more Lambdas

1. Simply duplicate `lambda-fns/example.ts` and edit the file and filename.
2. Run `npm run deploy` and all files in `lambda-fns` will be deployed on AWS as lambda handlers.

### Validating lambda input

This boilerplate uses `typescript-is` to check types at runtime, you can use this as an easy way to validate lambda input, the example handler at `lambda-fns/example.ts` uses `assertType<MyEvent>(event)` to validate the type of the event.

### Testing

This repository uses `jest` and `ts-jest`.
Every lambda function should have an accompanying test file in `lambda-fns/__tests__`.

### Give feedback or make suggestions

If you have suggestions for what can be improved, [please open an issue](https://github.com/juliankrispel/typescript-aws-lambda-terraform/issues/new)

Made by [Julian](https://jkrsp.com/), [follow me on twitter](https://twitter.com/juliandoesstuff)
