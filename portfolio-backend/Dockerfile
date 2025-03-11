FROM golang:1.22-alpine AS builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache gcc musl-dev

# Copy go mod and sum files
COPY go.mod ./
COPY go.sum ./

# Download dependencies
RUN go mod download

# Copy source code
COPY . .

# Build with CGO ENABLED for SQLite support
RUN CGO_ENABLED=1 GOOS=linux go build -o main .

FROM alpine:latest

WORKDIR /root/

# Install runtime dependencies for SQLite and PDF handling
RUN apk add --no-cache sqlite curl wget poppler-utils ghostscript font-noto

# Copy the binary from builder
COPY --from=builder /app/main .

# Create directories
RUN mkdir -p static && chmod 755 static
RUN mkdir -p db && chmod 755 db

# Copy static files
COPY ./static /root/static/

# Ensure files are readable
RUN chmod -R 644 /root/static/* && \
    find /root/static -type d -exec chmod 755 {} \;

# Expose port
EXPOSE 8080

# Command to run
CMD ["./main"] 