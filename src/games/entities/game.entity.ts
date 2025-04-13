import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "games" })
export class GameEntity {
    @PrimaryColumn()
    id: number;

    @Column({ name: "original_price", default: 0 })
    originalPrice: number;

    @Column({ name: "current_price", default: 0 })
    currentPrice: number;

    @Column({ name: "current_discount", default: 0 })
    currentDiscount: number;

    @Column({ name: "best_price", default: 0 })
    bestPrice: number;

    @Column({ name: "best_discount", default: 0 })
    bestDiscount: number;

    @Column({ name: "best_price_date", type: "timestamp", nullable: true })
    bestDiscountDate: number;

    @Column({ default: true, name: "is_tracking" })
    isTracking: boolean;

    @CreateDateColumn({ type: "timestamp", name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
    updatedAt: Date;
}
