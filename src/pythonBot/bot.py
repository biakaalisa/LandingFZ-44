import telebot

bot = telebot.TeleBot("5540113565:AAGfYXnLU-igyw5VqikocwT2sQgLrsOhPco")     #токен бота

@bot.message_handler(commands=['start'])    #отслеживание команд в кавычках отслеживаемая

def start(message):     #ф-я команды
    bot.send_message(message.chat.id, 'Чай, горячий чай')      #отправляем пользователю сообщение bot.send_(что хотим)(id чата, текст сообщения, parshe_mode=''(режим отправки текста (html, например. Можно исп.теги языка)))


bot.polling(none_stop=True)     #запуск бота на постоян. выполнение