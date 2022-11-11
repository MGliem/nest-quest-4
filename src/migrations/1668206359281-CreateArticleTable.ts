import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateArticleTable1668206359281 implements MigrationInterface {
    name = 'CreateArticleTable1668206359281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`content\` text NOT NULL, \`author\` varchar(255) NOT NULL, \`creationDate\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`article\``);
    }

}
