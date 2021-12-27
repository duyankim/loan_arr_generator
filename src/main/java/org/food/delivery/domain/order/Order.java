package org.food.delivery.domain.order;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name="ORDERS")
@Getter
public class Order {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="ORDER_ID)
    private Long id;

    @ManyToOne
    @JoinColumn(name="SHOP_ID")
    private Shop shop;

    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name="ORDER_ID")
    private List<OrderLineItem> orderLineItems = new ArrayList<>();

    public void place() {
        validate();
        ordered();
    }

    private void validate() {
        if (orderLineItems.isEmpty()) {
            throw new IllegalStateException("주문 항목이 비어있습니다.");
        }

        if (!shop.isOpen()) {
            throw new IllegalArgumentException("가게가 영업중이 아닙니다.");
        }

        if (!shop.isValidOrderAmount(calculateTotalPrice())) {
            throw new IllegalStateException(String.format(
                    "최소 주문 금액 %s 이상을 주문해주세요.", shop.getMinOrderAmount()
            ));
        }

        for (OrderLineItem orderLineItem : orderLineItems) {
            orderLineItem.validate();
        }
    }

    private void ordered() {
        this.orderStatus = OrderStatus.ORDERED;
    }
}
