import { Column, PrimaryGeneratedColumn } from "typeorm";

export enum Status{
    ALIVE = "Alive",
    DEAD = "Dead",
    ESCAPED = "Escaped",
    FREE = "Free"
}

export class Contestant {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column("text",{
        default: "Contestant"
    })
    name: string;
    @Column("text",{
        default: "The Generic"
    })
    nickname: string;
    @Column("text",{
        default: "Area Zero"
    })
    origin: string;
    @Column("numeric",{
        default: 50
    })
    strength: number;
    @Column("numeric",{
        default: 50
    })
    agility: number;
    @Column("numeric",{
        default: 0
    })
    wins: number;
    @Column("numeric",{
        default: 0
    })
    losses: number;
    @Column({
        type: "enum",
        enum: Status,
        default: Status.ALIVE
    })
    status: Status;
}