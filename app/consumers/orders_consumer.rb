class OrdersConsumer < Racecar::Consumer
subscribes_to "orders-topic"

  def process(message)
    puts message.key
    puts message.value
  end
end