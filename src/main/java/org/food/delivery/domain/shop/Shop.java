package org.food.delivery.domain.shop;

@Entity
@Table(name="SHOPS")
@Getter
public class Shop {

    // 가게가 영업중인지 확인
    public boolean isOpen() {
        return this.open;
    }

    // 주문 금액이 최소 주문 금액 이상인지 확인
    public boolean isValidOrderAmount(Money amount) {
        return amount.isGreaterThanOrEqual(minOrderAmount);
    }
}