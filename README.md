# Getting started

The general-purpose API

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=NeutrinoAPI-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=NeutrinoAPI-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `NeutrinoAPI ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=NeutrinoAPI-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=NeutrinoAPI-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=NeutrinoAPI-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=NeutrinoAPI-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  NeutrinoAPIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=NeutrinoAPIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| userId | Your user ID |
| apiKey | Your API key |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.userId = "userId"; // Your user ID
lib.Configuration.apiKey = "apiKey"; // Your API key

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [Imaging](#imaging)
* [Telephony](#telephony)
* [DataTools](#data_tools)
* [SecurityAndNetworking](#security_and_networking)
* [Geolocation](#geolocation)
* [ECommerce](#e_commerce)

## <a name="imaging"></a>![Class: ](https://apidocs.io/img/class.png ".Imaging") Imaging

### Get singleton instance

The singleton instance of the ``` Imaging ``` class can be accessed from the API Client.

```javascript
var controller = lib.Imaging;
```

### <a name="image_resize"></a>![Method: ](https://apidocs.io/img/method.png ".Imaging.imageResize") imageResize

> Resize an image and output as either JPEG or PNG. See: https://www.neutrinoapi.com/api/image-resize/


```javascript
function imageResize(imageUrl, width, height, format, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| imageUrl |  ``` Required ```  | The URL to the source image |
| width |  ``` Required ```  | Width to resize to (in px) |
| height |  ``` Required ```  | Height to resize to (in px) |
| format |  ``` Optional ```  ``` DefaultValue ```  | The output image format, can be either png or jpg |



#### Example Usage

```javascript

    var imageUrl = 'image-url';
    var width = 241;
    var height = 241;
    var format = 'format';

    TestHelper.getFileContents('url', function(data) {
        controller.imageResize(imageUrl, width, height, format, function(error, response, context) {

        });
    });
```



### <a name="q_r_code"></a>![Method: ](https://apidocs.io/img/method.png ".Imaging.qRCode") qRCode

> Generate a QR code as a PNG image. See: https://www.neutrinoapi.com/api/qr-code/


```javascript
function qRCode(content, width, height, fgColor, bgColor, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | The content to encode into the QR code (e.g. a URL or a phone number) |
| width |  ``` Optional ```  ``` DefaultValue ```  | The width of the QR code (in px) |
| height |  ``` Optional ```  ``` DefaultValue ```  | The height of the QR code (in px) |
| fgColor |  ``` Optional ```  ``` DefaultValue ```  | The QR code foreground color (you should always use a dark color for this) |
| bgColor |  ``` Optional ```  ``` DefaultValue ```  | The QR code background color (you should always use a light color for this) |



#### Example Usage

```javascript

    var content = 'content';
    var width = 241;
    var height = 241;
    var fgColor = 'fg-color';
    var bgColor = 'bg-color';

    TestHelper.getFileContents('url', function(data) {
        controller.qRCode(content, width, height, fgColor, bgColor, function(error, response, context) {

        });
    });
```



### <a name="image_watermark"></a>![Method: ](https://apidocs.io/img/method.png ".Imaging.imageWatermark") imageWatermark

> Watermark one image with another image. See: https://www.neutrinoapi.com/api/image-watermark/


```javascript
function imageWatermark(imageUrl, watermarkUrl, opacity, format, position, width, height, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| imageUrl |  ``` Required ```  | The URL to the source image |
| watermarkUrl |  ``` Required ```  | The URL to the watermark image |
| opacity |  ``` Optional ```  ``` DefaultValue ```  | The opacity of the watermark (0 to 100) |
| format |  ``` Optional ```  ``` DefaultValue ```  | The output image format, can be either png or jpg |
| position |  ``` Optional ```  ``` DefaultValue ```  | The position of the watermark image, possible values are: center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right |
| width |  ``` Optional ```  | If set resize the resulting image to this width (preserving aspect ratio) |
| height |  ``` Optional ```  | If set resize the resulting image to this height (preserving aspect ratio) |



#### Example Usage

```javascript

    var imageUrl = 'image-url';
    var watermarkUrl = 'watermark-url';
    var opacity = 241;
    var format = 'format';
    var position = 'position';
    var width = 241;
    var height = 241;

    TestHelper.getFileContents('url', function(data) {
        controller.imageWatermark(imageUrl, watermarkUrl, opacity, format, position, width, height, function(error, response, context) {

        });
    });
```



### <a name="h_tml5_render"></a>![Method: ](https://apidocs.io/img/method.png ".Imaging.hTML5Render") hTML5Render

> Render HTML and HTML5 content to PDF, JPG or PNG


```javascript
function hTML5Render(content, format, pageSize, title, margin, marginLeft, marginRight, marginTop, marginBottom, landscape, zoom, grayscale, mediaPrint, mediaQueries, forms, css, imageWidth, imageHeight, renderDelay, headerTextLeft, headerTextCenter, headerTextRight, headerSize, headerFont, headerFontSize, headerLine, footerTextLeft, footerTextCenter, footerTextRight, footerSize, footerFont, footerFontSize, footerLine, pageWidth, pageHeight, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | The HTML content. This can be either a URL to load HTML from or an actual HTML content string |
| format |  ``` Optional ```  ``` DefaultValue ```  | Which format to output, available options are: PDF, PNG, JPG |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter |
| title |  ``` Optional ```  | The document title |
| margin |  ``` Optional ```  ``` DefaultValue ```  | The document margin (in mm) |
| marginLeft |  ``` Optional ```  ``` DefaultValue ```  | The document left margin (in mm) |
| marginRight |  ``` Optional ```  ``` DefaultValue ```  | The document right margin (in mm) |
| marginTop |  ``` Optional ```  ``` DefaultValue ```  | The document top margin (in mm) |
| marginBottom |  ``` Optional ```  ``` DefaultValue ```  | The document bottom margin (in mm) |
| landscape |  ``` Optional ```  ``` DefaultValue ```  | Set the document to lanscape orientation |
| zoom |  ``` Optional ```  ``` DefaultValue ```  | Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size) |
| grayscale |  ``` Optional ```  ``` DefaultValue ```  | Render the final document in grayscale |
| mediaPrint |  ``` Optional ```  ``` DefaultValue ```  | Use @media print CSS styles to render the document |
| mediaQueries |  ``` Optional ```  ``` DefaultValue ```  | Activate all @media queries before rendering. This can be useful if you wan't to render the mobile version of a responsive website |
| forms |  ``` Optional ```  ``` DefaultValue ```  | Generate real (fillable) PDF forms from HTML forms |
| css |  ``` Optional ```  | Inject custom CSS into the HTML. e.g. 'body { background-color: red;}' |
| imageWidth |  ``` Optional ```  ``` DefaultValue ```  | If rendering to an image format (PNG or JPG) use this image width (in pixels) |
| imageHeight |  ``` Optional ```  | If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content |
| renderDelay |  ``` Optional ```  | Number of milliseconds to wait before rendering the page (can be useful for pages with animations etc) |
| headerTextLeft |  ``` Optional ```  | Text to print to the left-hand side header of each page. e.g. 'My header - Page {page_number} of {total_pages}' |
| headerTextCenter |  ``` Optional ```  | Text to print to the center header of each page |
| headerTextRight |  ``` Optional ```  | Text to print to the right-hand side header of each page |
| headerSize |  ``` Optional ```  ``` DefaultValue ```  | The height of your header (in mm) |
| headerFont |  ``` Optional ```  ``` DefaultValue ```  | Set the header font. Fonts available: Times, Courier, Helvetica, Arial |
| headerFontSize |  ``` Optional ```  ``` DefaultValue ```  | Set the header font size (in pt) |
| headerLine |  ``` Optional ```  ``` DefaultValue ```  | Draw a full page width horizontal line under your header |
| footerTextLeft |  ``` Optional ```  | Text to print to the left-hand side footer of each page. e.g. 'My footer - Page {page_number} of {total_pages}' |
| footerTextCenter |  ``` Optional ```  | Text to print to the center header of each page |
| footerTextRight |  ``` Optional ```  | Text to print to the right-hand side header of each page |
| footerSize |  ``` Optional ```  ``` DefaultValue ```  | The height of your footer (in mm) |
| footerFont |  ``` Optional ```  ``` DefaultValue ```  | Set the footer font. Fonts available: Times, Courier, Helvetica, Arial |
| footerFontSize |  ``` Optional ```  ``` DefaultValue ```  | Set the footer font size (in pt) |
| footerLine |  ``` Optional ```  ``` DefaultValue ```  | Draw a full page width horizontal line above your footer |
| pageWidth |  ``` Optional ```  | Set the PDF page width explicitly (in mm) |
| pageHeight |  ``` Optional ```  | Set the PDF page height explicitly (in mm) |



#### Example Usage

```javascript

    var content = 'content';
    var format = 'format';
    var pageSize = 'page-size';
    var title = 'title';
    var margin = 241;
    var marginLeft = 241;
    var marginRight = 241;
    var marginTop = 241;
    var marginBottom = 241;
    var landscape = true;
    var zoom = 241.324201569112;
    var grayscale = true;
    var mediaPrint = true;
    var mediaQueries = true;
    var forms = true;
    var css = 'css';
    var imageWidth = 241;
    var imageHeight = 241;
    var renderDelay = 241;
    var headerTextLeft = 'header-text-left';
    var headerTextCenter = 'header-text-center';
    var headerTextRight = 'header-text-right';
    var headerSize = 241;
    var headerFont = 'header-font';
    var headerFontSize = 'header-font-size';
    var headerLine = true;
    var footerTextLeft = 'footer-text-left';
    var footerTextCenter = 'footer-text-center';
    var footerTextRight = 'footer-text-right';
    var footerSize = 241;
    var footerFont = 'footer-font';
    var footerFontSize = 241;
    var footerLine = true;
    var pageWidth = 241;
    var pageHeight = 241;

    TestHelper.getFileContents('url', function(data) {
        controller.hTML5Render(content, format, pageSize, title, margin, marginLeft, marginRight, marginTop, marginBottom, landscape, zoom, grayscale, mediaPrint, mediaQueries, forms, css, imageWidth, imageHeight, renderDelay, headerTextLeft, headerTextCenter, headerTextRight, headerSize, headerFont, headerFontSize, headerLine, footerTextLeft, footerTextCenter, footerTextRight, footerSize, footerFont, footerFontSize, footerLine, pageWidth, pageHeight, function(error, response, context) {

        });
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="telephony"></a>![Class: ](https://apidocs.io/img/class.png ".Telephony") Telephony

### Get singleton instance

The singleton instance of the ``` Telephony ``` class can be accessed from the API Client.

```javascript
var controller = lib.Telephony;
```

### <a name="h_lr_lookup"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.hLRLookup") hLRLookup

> Connect to the global mobile cellular network and retrieve the status of a mobile device


```javascript
function hLRLookup(number, countryCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | A phone number |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign) |



#### Example Usage

```javascript

    var number = 'number';
    var countryCode = 'country-code';

    controller.hLRLookup(number, countryCode, function(error, response, context) {

    
    });
```



### <a name="phone_playback"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.phonePlayback") phonePlayback

> Make an automated call to any valid phone number and playback an audio message


```javascript
function phonePlayback(number, audioUrl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number to call. Must be valid international format |
| audioUrl |  ``` Required ```  | A URL to a valid audio file. Accepted audio formats are: MP3, WAV, OGG |



#### Example Usage

```javascript

    var number = 'number';
    var audioUrl = 'audio-url';

    controller.phonePlayback(number, audioUrl, function(error, response, context) {

    
    });
```



### <a name="verify_security_code"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.verifySecurityCode") verifySecurityCode

> Check if a security code from one of the verify APIs is valid


```javascript
function verifySecurityCode(securityCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| securityCode |  ``` Required ```  | The security code to verify |



#### Example Usage

```javascript

    var securityCode = 77;

    controller.verifySecurityCode(securityCode, function(error, response, context) {

    
    });
```



### <a name="s_ms_verify"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.sMSVerify") sMSVerify

> Send a unique security code to any mobile device via SMS


```javascript
function sMSVerify(number, codeLength, securityCode, countryCode, languageCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number to send a verification code to |
| codeLength |  ``` Optional ```  ``` DefaultValue ```  | The number of digits to use in the security code (must be between 4 and 12) |
| securityCode |  ``` Optional ```  | ass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (only numerical security codes are currently supported) |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign) |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to send the verification code in, available languages are: de - German, en - English, es - Spanish, fr - Fench, it - Italian, pt - Portuguese, ru - Russian |



#### Example Usage

```javascript

    var number = 'number';
    var codeLength = 77;
    var securityCode = 77;
    var countryCode = 'country-code';
    var languageCode = 'language-code';

    controller.sMSVerify(number, codeLength, securityCode, countryCode, languageCode, function(error, response, context) {

    
    });
```



### <a name="phone_verify"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.phoneVerify") phoneVerify

> Make an automated call to any valid phone number and playback a unique security code


```javascript
function phoneVerify(number, codeLength, securityCode, playbackDelay, countryCode, languageCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number to send the verification code to |
| codeLength |  ``` Optional ```  ``` DefaultValue ```  | The number of digits to use in the security code (between 4 and 12) |
| securityCode |  ``` Optional ```  | Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (only numerical security codes are currently supported) |
| playbackDelay |  ``` Optional ```  ``` DefaultValue ```  | The delay in milliseconds between the playback of each security code |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign) |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to playback the verification code in, available languages are: de - German, en - English, es - Spanish, fr - Fench, it - Italian, pt - Portuguese, ru - Russian |



#### Example Usage

```javascript

    var number = 'number';
    var codeLength = 77;
    var securityCode = 77;
    var playbackDelay = 77;
    var countryCode = 'country-code';
    var languageCode = 'language-code';

    controller.phoneVerify(number, codeLength, securityCode, playbackDelay, countryCode, languageCode, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="data_tools"></a>![Class: ](https://apidocs.io/img/class.png ".DataTools") DataTools

### Get singleton instance

The singleton instance of the ``` DataTools ``` class can be accessed from the API Client.

```javascript
var controller = lib.DataTools;
```

### <a name="email_validate"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.emailValidate") emailValidate

> Parse, validate and clean an email address


```javascript
function emailValidate(email, fixTypos, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | The email address |
| fixTypos |  ``` Optional ```  ``` DefaultValue ```  | Automatically attempt to fix typos in the address |



#### Example Usage

```javascript

    var email = 'email';
    var fixTypos = false;

    controller.emailValidate(email, fixTypos, function(error, response, context) {

    
    });
```



### <a name="bad_word_filter"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.badWordFilter") badWordFilter

> Detect bad words, swear words and profanity in a given text


```javascript
function badWordFilter(content, censorCharacter, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | The text content to check. This can be either a URL to load content from or an actual content string |
| censorCharacter |  ``` Optional ```  | The character to use to censor out the bad words found |



#### Example Usage

```javascript

    var content = 'content';
    var censorCharacter = 'censor-character';

    controller.badWordFilter(content, censorCharacter, function(error, response, context) {

    
    });
```



### <a name="convert"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.convert") convert

> A powerful unit and currency conversion tool


```javascript
function convert(fromValue, fromType, toType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fromValue |  ``` Required ```  | The value to convert from |
| fromType |  ``` Required ```  | The type of the value to convert from |
| toType |  ``` Required ```  | The type to convert to |



#### Example Usage

```javascript

    var fromValue = 'from-value';
    var fromType = 'from-type';
    var toType = 'to-type';

    controller.convert(fromValue, fromType, toType, function(error, response, context) {

    
    });
```



### <a name="phone_validate"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.phoneValidate") phoneValidate

> Parse, validate and get location information about a phone number


```javascript
function phoneValidate(number, countryCode, ip, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign) |
| ip |  ``` Optional ```  | Pass in a users IP address and we will assume numbers are based in the country of the IP address |



#### Example Usage

```javascript

    var number = 'number';
    var countryCode = 'country-code';
    var ip = 'ip';

    controller.phoneValidate(number, countryCode, ip, function(error, response, context) {

    
    });
```



### <a name="user_agent_info"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.userAgentInfo") userAgentInfo

> Parse, validate and get detailed user-agent information from a user agent string


```javascript
function userAgentInfo(userAgent, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userAgent |  ``` Required ```  | A user-agent string |



#### Example Usage

```javascript

    var userAgent = 'user-agent';

    controller.userAgentInfo(userAgent, function(error, response, context) {

    
    });
```



### <a name="h_tml_clean"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.hTMLClean") hTMLClean

> Clean and sanitize untrusted HTML


```javascript
function hTMLClean(content, outputType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | The HTML content. This can be either a URL to load HTML from or an actual HTML content string |
| outputType |  ``` Required ```  | The level of sanitization, possible values are: plain-text, simple-text, basic-html, basic-html-with-images, advanced-html |



#### Example Usage

```javascript

    var content = 'content';
    var outputType = 'output-type';

    TestHelper.getFileContents('url', function(data) {
        controller.hTMLClean(content, outputType, function(error, response, context) {

        });
    });
```



### <a name="h_tml_extract"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.hTMLExtract") hTMLExtract

> Extract specific HTML tag contents or attributes from complex HTML or XHTML content


```javascript
function hTMLExtract(content, tag, attribute, baseUrl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | The HTML content. This can be either a URL to load HTML from or an actual HTML content string |
| tag |  ``` Required ```  | The HTML tag(s) to extract data from. This can just be a simple tag name like 'img' OR a CSS/jQuery style selector |
| attribute |  ``` Optional ```  | If set, then extract data from the specified tag attribute. If not set, then data will be extracted from the tags inner content |
| baseUrl |  ``` Optional ```  | The base URL to replace into realive links |



#### Example Usage

```javascript

    var content = 'content';
    var tag = 'tag';
    var attribute = 'attribute';
    var baseUrl = 'base-url';

    controller.hTMLExtract(content, tag, attribute, baseUrl, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="security_and_networking"></a>![Class: ](https://apidocs.io/img/class.png ".SecurityAndNetworking") SecurityAndNetworking

### Get singleton instance

The singleton instance of the ``` SecurityAndNetworking ``` class can be accessed from the API Client.

```javascript
var controller = lib.SecurityAndNetworking;
```

### <a name="host_reputation"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.hostReputation") hostReputation

> Check the reputation of an IP address or domain against a comprehensive list of blacklists and blocklists (DNSBLs)


```javascript
function hostReputation(host, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| host |  ``` Required ```  | An IPv4 address or a domain name. If you supply a domain name it will be checked against the URI DNSBL list |



#### Example Usage

```javascript

    var host = 'host';

    controller.hostReputation(host, function(error, response, context) {

    
    });
```



### <a name="u_rl_info"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.uRLInfo") uRLInfo

> Parse, analyze and retrieve content from the supplied URL


```javascript
function uRLInfo(url, fetchContent, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| url |  ``` Required ```  | The URL to process |
| fetchContent |  ``` Required ```  | If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content |



#### Example Usage

```javascript

    var url = 'url';
    var fetchContent = false;

    controller.uRLInfo(url, fetchContent, function(error, response, context) {

    
    });
```



### <a name="i_p_probe"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.iPProbe") iPProbe

> Analyze and extract provider information for an IP address


```javascript
function iPProbe(ip, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ip |  ``` Required ```  | IPv4 or IPv6 address |



#### Example Usage

```javascript

    var ip = 'ip';

    controller.iPProbe(ip, function(error, response, context) {

    
    });
```



### <a name="i_p_blocklist"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.iPBlocklist") iPBlocklist

> The IP Blocklist API will detect potentially malicious or dangerous IP addresses


```javascript
function iPBlocklist(ip, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ip |  ``` Required ```  | An IPv4 address |



#### Example Usage

```javascript

    var ip = 'ip';

    controller.iPBlocklist(ip, function(error, response, context) {

    
    });
```



### <a name="email_verify"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.emailVerify") emailVerify

> SMTP based email address verification


```javascript
function emailVerify(email, fixTypos, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | An email address |
| fixTypos |  ``` Optional ```  | Automatically attempt to fix typos in the address |



#### Example Usage

```javascript

    var email = 'email';
    var fixTypos = false;

    controller.emailVerify(email, fixTypos, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="geolocation"></a>![Class: ](https://apidocs.io/img/class.png ".Geolocation") Geolocation

### Get singleton instance

The singleton instance of the ``` Geolocation ``` class can be accessed from the API Client.

```javascript
var controller = lib.Geolocation;
```

### <a name="geocode_reverse"></a>![Method: ](https://apidocs.io/img/method.png ".Geolocation.geocodeReverse") geocodeReverse

> Convert a geographic coordinate (latitude and longitude) into a real world address or location.


```javascript
function geocodeReverse(latitude, longitude, languageCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| latitude |  ``` Required ```  | The location latitude |
| longitude |  ``` Required ```  | The location longitude |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to display results in, available languages are: de, en, es, fr, it, pt, ru |



#### Example Usage

```javascript

    var latitude = 77.8194834607744;
    var longitude = 77.8194834607744;
    var languageCode = 'language-code';

    controller.geocodeReverse(latitude, longitude, languageCode, function(error, response, context) {

    
    });
```



### <a name="i_p_info"></a>![Method: ](https://apidocs.io/img/method.png ".Geolocation.iPInfo") iPInfo

> Get location information about an IP address and do reverse DNS (PTR) lookups.


```javascript
function iPInfo(ip, reverseLookup, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ip |  ``` Required ```  | The IP address |
| reverseLookup |  ``` Optional ```  ``` DefaultValue ```  | Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it |



#### Example Usage

```javascript

    var ip = 'ip';
    var reverseLookup = false;

    controller.iPInfo(ip, reverseLookup, function(error, response, context) {

    
    });
```



### <a name="geocode_address"></a>![Method: ](https://apidocs.io/img/method.png ".Geolocation.geocodeAddress") geocodeAddress

> Geocode an address, partial address or the name of a location


```javascript
function geocodeAddress(address, countryCode, languageCode, fuzzySearch, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| address |  ``` Required ```  | The address or partial address to try and locate |
| countryCode |  ``` Optional ```  | The ISO 2-letter country code to be biased towards (default is no country bias) |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to display results in, available languages are: de, en, es, fr, it, pt, ru |
| fuzzySearch |  ``` Optional ```  ``` DefaultValue ```  | If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. We use a combination of approximate string matching and data cleansing to find possible location matches |



#### Example Usage

```javascript

    var address = 'address';
    var countryCode = 'country-code';
    var languageCode = 'language-code';
    var fuzzySearch = false;

    controller.geocodeAddress(address, countryCode, languageCode, fuzzySearch, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="e_commerce"></a>![Class: ](https://apidocs.io/img/class.png ".ECommerce") ECommerce

### Get singleton instance

The singleton instance of the ``` ECommerce ``` class can be accessed from the API Client.

```javascript
var controller = lib.ECommerce;
```

### <a name="b_in_lookup"></a>![Method: ](https://apidocs.io/img/method.png ".ECommerce.bINLookup") bINLookup

> Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup. See: https://www.neutrinoapi.com/api/bin-lookup/


```javascript
function bINLookup(binNumber, customerIp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| binNumber |  ``` Required ```  | The BIN or IIN number (the first 6 digits of a credit card number) |
| customerIp |  ``` Optional ```  | Pass in a customers remote IP address. The API will then determine the country of the IP address and match it against the BIN country. This feature is designed for fraud prevention and detection checks. |



#### Example Usage

```javascript

    var binNumber = 'bin-number';
    var customerIp = 'customer-ip';

    controller.bINLookup(binNumber, customerIp, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



