import { Company } from '@things-factory/biz-base'
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'
const csv = require('csvtojson')
const path = require('path')

export class SeedCompany1558663372466 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Company)
    const csvPath = path.resolve(__dirname, '..', 'seed-data', 'company.csv')

    try {
      const json = await csv().fromFile(csvPath)
      json.forEach(async recode => {
        await repository.save(recode)
      })
    } catch (e) {
      console.log(csvPath)
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
