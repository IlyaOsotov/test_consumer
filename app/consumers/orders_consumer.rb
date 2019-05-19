class OrdersConsumer < Racecar::Consumer
subscribes_to "orders-topic"

  def process(message)
    puts message.key
    puts message.value
    ActionCable.server.broadcast 'OrdersChannel', message.value
  end
end