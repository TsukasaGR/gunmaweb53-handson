# Gunma.web #53 Prismaハンズオン

## 構成

Docker / Node.js / express / prisma / sqliteの簡易的なWebアプリケーションです

## 使い方

### 0. 前提

docker及びdocker composeが利用できることが前提です

### 1. Node.jsコンテナ起動

```bash
$ make up
```

- `docker compose up --build` が実行され、Dockerコンテナが起動します
- makeコマンドが使えない方はMakefileを参考に直接コマンドを実行してください

### 2. APIへのアクセス

http://localhost:3000

- ルート以降のパスはご自身の実装内容に合わせて変更してください
- コード変更時は再度 `make up` を実行してください

### 3. コマンドによる関数実行

```
# ホストPCでDockerコンテナに入り、
$ make ssh

# Dockerコンテナ内で以下を実行する
$ ts-node script.ts
```

### 4. DBクライアント(Prisma Studio)起動

```
# ホストPCでDockerコンテナに入り、
$ make ssh

# Dockerコンテナ内で以下を実行する
$ npx prisma studio
```

上記実行後、 http://localhost:5555 にアクセスするとDBクライアントを表示できる