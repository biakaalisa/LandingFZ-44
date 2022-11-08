import telebot

bot = telebot.TeleBot("")     #токен бота

@bot.message_handler(commands=['start', 'help'])    #отслеживание команд в кавычках отслеживаемая

def start(message):     #ф-я команды
    mess = f"Привет, <b>{message.from_user.first_name}</b>"
    bot.send_message(message.chat.id, mess, parse_mode='html')      #отправляем пользователю сообщение bot.send_(что хотим)(id чата, текст сообщения, parshe_mode=''(режим отправки текста (html, например. Можно исп.теги языка)))


bot.polling(none_stop=True)     #запуск бота на постоян. выполнение