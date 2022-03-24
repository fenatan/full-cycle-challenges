# STAGE 1 
FROM golang:alpine as builder
WORKDIR /usr/go/app
COPY . .
RUN go build -o src/app src/index.go

# STAGE 2 
FROM scratch
COPY --from=builder /usr/go/app/src/app .
CMD [ "./app" ] 