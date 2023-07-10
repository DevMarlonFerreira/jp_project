import { MigrationInterface, QueryRunner, Table, Collection } from "typeorm"

export class CreateInfluencers1688989044034 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        new Table({
            name: 'influencers',
            columns: [
            //   {
            //     name: 'id',
            //     type: 'uuid',
            //     isPrimary: true,
            //   },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'email',
                type: 'varchar',
              },
              {
                name: 'platforms',
                type: {
                    twitter:{
                        name: 'channel',
                        type: 'varchar',   
                    }
                },
              },
            //   {
            //     name: 'price',
            //     type: 'decimal',
            //     precision: 10,
            //     scale: 2,
            //   },
            //   {
            //     name: 'quantity',
            //     type: 'int',
            //   },
            //   {
            //     name: 'created_at',
            //     type: 'timestamp with time zone',
            //     default: 'now()',
            //   },
            //   {
            //     name: 'updated_at',
            //     type: 'timestamp with time zone',
            //     default: 'now()',
            //   },
            ],
          }),









    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('influencers');
    }

}
