import express from 'express';
import teacherRouter from './routes/teacher.js';
import galleryRouter from './routes/gallery.js';
import NoticeRouter from './routes/notice.js';
// import AdminRouter from './routes/admin.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors())

app.use("/api/teachers", teacherRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/notices", NoticeRouter);
// app.use("/api/admin", AdminRouter);
app.listen(8000, () => {
    console.log("Api Run Succesfully port 8000")
})