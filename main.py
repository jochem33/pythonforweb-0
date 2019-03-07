from http.server import HTTPServer, BaseHTTPRequestHandler

class Serv(BaseHTTPRequestHandler):

    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        elif self.path == '/test':
            self.path = '/test.html'
        try:
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except:
            file_to_open = 'File not found'
            self.send_response(404)

        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = post_data.decode('utf-8')
        value_list = data.split('&')
        name, telephone, addres = None, None, None
        for values in value_list:
            val = values.split('=')
            if val[0] == 'name':
                name = val[1]
            if val[0] == 'telephone':
                telephone = val[1]
            if val[0] == 'addres':
                addres = val[1]

        print("<----- Request Start -----\n")

        print(self.headers)
        print(content_length)
        print(name)
        print(telephone)
        print(addres)
        print("<----- Request End -----\n")

        self.path = '/test2.html'
        file_to_open = open(self.path[1:]).read()

        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write("POST request for {path} with body {body}".format(path=self.path, body=post_data).encode('utf-8'))

httpd = HTTPServer(('localhost', 8080), Serv)
httpd.serve_forever()
