import express from 'express';

const port = 3000;
const app = express();

const data = [
  { id: 1, title: 'title1', content: 'content1' },
  { id: 2, title: 'title2', content: 'content2' },
  { id: 3, title: 'title3', content: 'content3' },
  { id: 4, title: 'title4', content: 'content4' },
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/posts', (req, res) => {
  res.send(data);
});

app.get('/posts/:postId', (req, res) => {
  const { postId } = req.params;
  const post = data.filter((item) => item.id === parseInt(postId))[0];
  res.send(post);
});

/**
 * 创建内容
 */
app.post('/posts', (req, res) => {
  const { content } = req.body;
  console.log('request x-test-header: ', req.headers['x-test-header']);
  res.set('X-Test-Request-Header', '123');
  res.status(201);
  res.send({ message: `Created content ${content} successfully.` });
});

app.listen(port, () => console.log('app listen on http//localhost:3000 ...'));
