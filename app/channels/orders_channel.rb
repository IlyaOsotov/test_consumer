class OrdersChannel < ApplicationCable::Channel
  def subscribed
    stream_from "OrdersChannel"
  end
end
