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

# Install runtime dependencies for SQLite
RUN apk add --no-cache sqlite

# Copy the binary from builder
COPY --from=builder /app/main .

# Create directories
RUN mkdir -p static
RUN mkdir -p db

# Expose port
EXPOSE 8080

# Command to run
CMD ["./main"] 