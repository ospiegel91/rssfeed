from bottle import route, run, static_file, template, request
import json
import feedparser
feed = feedparser.parse("https://www.jpost.com/Rss/RssFeedsHeadlines.aspx")


@route('/newslist')
def feed_to_list():
    list_of_posts = []
    for i in range(len(feed["entries"])):
        post_entry = {
            "title": feed["entries"][i]['title'],
            "link": feed["entries"][i]['link']
        }
        list_of_posts.append(post_entry)
    print(list_of_posts)
    return json.dumps(list_of_posts)





@route('/', method='GET')
def get_app():
    return template("static/html/index.html")


@route('/js/<filename:re:.*\.js>', method='GET')
def js(filename):
    return static_file(filename, root='static/js')


@route('/css/<filename:re:.*\.css>', method='GET')
def js(filename):
    return static_file(filename, root='static/css')

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