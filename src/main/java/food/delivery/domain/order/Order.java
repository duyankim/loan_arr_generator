package food.delivery.domain.order;

public class Order {
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
