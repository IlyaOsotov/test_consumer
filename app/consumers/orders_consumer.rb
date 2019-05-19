class OrdersConsumer < Racecar::Consumer
subscribes_to "orders-topic"

  def process(message)
    puts message.key
    puts message.value
    ActionCable.server.broadcast 'orders_channel', message.value
  end
end