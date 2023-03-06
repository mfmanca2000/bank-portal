import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'applications'})
export class Application {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    title: string;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column()
    link: string;

    @ApiProperty()
    @Column()
    logoPath: string;
}