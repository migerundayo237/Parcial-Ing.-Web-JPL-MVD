import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Battle {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column("uuid")
    contestant_1: string;
    @Column("uuid")
    contestant_2: string;
    @Column("uuid",{
        nullable: true
    })
    winner: string;
    @Column("boolean",{
        default: false
    })
    death_occurred: boolean;
    @Column("text",{
        default: "No injuries."
    })
    injuries: string;
    @Column("date",{
        default: ()=> "CURRENT_TIMESTAMP"
    })
    date: Date;
}
