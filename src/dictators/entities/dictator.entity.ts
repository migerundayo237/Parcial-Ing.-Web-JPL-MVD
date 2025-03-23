import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Dictator {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column("text",{
        default: "Dictator"
    })
    name: string;
    @Column("text",{
        default: "Area Zero"
    })
    territory: string;
    @Column("numeric",{
        default: 0
    })
    number_of_slaves: number;
    @Column("numeric",{
        default: 50
    })
    loyalty_to_Carolina: number;
}
