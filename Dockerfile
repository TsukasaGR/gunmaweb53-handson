# ベースイメージの指定
FROM node:20-alpine

# sqlite3と必要なツールをインストール
RUN apk add --no-cache sqlite \
    && apk add --no-cache bash

# 作業ディレクトリの設定
WORKDIR /app

# TypeScriptとts-nodeをインストール
RUN npm install -g typescript ts-node

# 依存関係インストール
COPY . .
RUN npm install

# Prismaクライアントの生成
RUN npx prisma generate

# マイグレーションの実行
RUN npx prisma migrate deploy

# # ポート3000を開放
EXPOSE 3000

# # アプリケーションを起動
CMD ["npm", "run", "dev"]
