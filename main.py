from bottle import route, run, static_file, template, request
import json
import feedparser
feed = feedparser.parse("https://www.jpost.com/Rss/RssFeedsHeadlines.aspx")


def testing(feed):
    title = feed["entries"][0]['title']
    a_link = feed["entries"][0]['link']



testing(feed)


@route('/', method='GET')
def get_app():
    return template("static/html/index.html")


# @route('/js/<filename:re:.*\.js>', method='GET')
# def js(filename):
#     return static_file(filename, root='static/js')
#
#
# users = [{"name": "dana"}, {"name": "emilie"}, {"name": "hilla"}, {"name": "moshe"}]
#
#
# @route('/usersList', method="GET")
# def get_users():
#     return json.dumps(users)
#
#
# @route('/users/add', method="POST")
# def add_users():
#     new_user = {
#         "name": request.json.get("name")
#     }
#     users.append(new_user)
#     return json.dumps(users)
#
#
# @route('/users/remove', method="DELETE")
# def add_users():
#     remove_user = {
#         "name": request.json.get("name")
#     }
#     users.remove(remove_user)
#     return json.dumps(users)


if __name__ == "__main__":
    run(host='localhost', port=7000)