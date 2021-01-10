const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/api/host', (req, res) => { //api/host경로로 요청받음
    res.send({ host: 'sejun' }); //sejun응답라우터
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})