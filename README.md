# Text-to-Morse API

This API is built with NestJS and allows you to convert text to audio or message morse formats.

## Installation

1. Clone the repository:
```shell
  git clone https://github.com/your-username/text-to-audio-api.git
```

2. Install the dependencies:
```shell
  cd text-to-audio-api
  yarn install
```

2. Run API:
```shell
  yarn start:dev
```

The API will be running on http://localhost:3000 by default.

## Usage

HealthCheck
```shell
- ENDPOINT: /api
- METHOD: GET 
```

Convert Text to Morse Code
```shell
- ENDPOINT: /api/morse/text/:text?generateExceptionOnInvalidLetter=[true|false]
- METHOD: GET 
- REQUEST PARAM "text"
- OPTIONAL QUERY PARAM "generateExceptionOnInvalidLetter" (by default the value is false)
```

Convert Text to Morse Audio
```shell
- ENDPOINT: /api/morse/audio/:text
- METHOD: GET 
- REQUEST PARAM "text"
```

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.