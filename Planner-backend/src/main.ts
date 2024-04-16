import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		origin: ['http://localhost:3001'],
		credentials: true,
		exposedHeaders: 'set-cookie',
	})
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
		res.header('Access-Control-Allow-Headers', 'Content-Type')
		next()
	})

	await app.listen(4200)
}
bootstrap()
