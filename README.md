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

* [WWW](#www)
* [Imaging](#imaging)
* [Telephony](#telephony)
* [ECommerce](#e_commerce)
* [Geolocation](#geolocation)
* [SecurityAndNetworking](#security_and_networking)
* [DataTools](#data_tools)

## <a name="www"></a>![Class: ](https://apidocs.io/img/class.png ".WWW") WWW

### Get singleton instance

The singleton instance of the ``` WWW ``` class can be accessed from the API Client.

```javascript
var controller = lib.WWW;
```

### <a name="browser_bot"></a>![Method: ](https://apidocs.io/img/method.png ".WWW.browserBot") browserBot

> Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website. See: https://www.neutrinoapi.com/api/browser-bot/


```javascript
function browserBot(url, timeout, delay, selector, exec, userAgent, ignoreCertificateErrors, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| url |  ``` Required ```  | The URL to load |
| timeout |  ``` Optional ```  ``` DefaultValue ```  | Timeout in seconds. Give up if still trying to load the page after this number of seconds |
| delay |  ``` Optional ```  ``` DefaultValue ```  | Delay in seconds to wait before executing any selectors or JavaScript |
| selector |  ``` Optional ```  | Extract content from the page DOM using this selector. Commonly known as a CSS selector, you can find a good reference <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">here</a> |
| exec |  ``` Optional ```  ``` Collection ```  ``` DefaultValue ```  | Execute JavaScript on the page. Each array element should contain a valid JavaScript statement in string form. If a statement returns any kind of value it will be returned in the 'exec-results' response.<br/><br/>For your convenience you can also use the following special shortcut functions:<br/><div style='padding-left:32px; font-family:inherit; font-size:inherit;'>sleep(seconds); Just wait/sleep for the specified number of seconds.<br/>click('selector'); Click on the first element matching the given selector.<br/>focus('selector'); Focus on the first element matching the given selector.<br/>keys('characters'); Send the specified keyboard characters. Use click() or focus() first to send keys to a specific element.<br/>enter(); Send the Enter key.<br/>tab(); Send the Tab key.<br/></div><br/>Example:<br/><div style='padding-left:32px; font-family:inherit; font-size:inherit;'>[ "click('#button-id')", "sleep(1)", "click('.field-class')", "keys('1234')", "enter()" ]</div> |
| userAgent |  ``` Optional ```  | Override the browsers default user-agent string with this one |
| ignoreCertificateErrors |  ``` Optional ```  ``` DefaultValue ```  | Ignore any TLS/SSL certificate errors and load the page anyway |



#### Example Usage

```javascript

    var url = 'url';
    var timeout = 187;
    var delay = 187;
    var selector = 'selector';
    var exec = ['exec'];
    var userAgent = 'user-agent';
    var ignoreCertificateErrors = true;

    controller.browserBot(url, timeout, delay, selector, exec, userAgent, ignoreCertificateErrors, function(error, response, context) {

    
    });
```



### <a name="h_tml_clean"></a>![Method: ](https://apidocs.io/img/method.png ".WWW.hTMLClean") hTMLClean

> Clean and sanitize untrusted HTML. See: https://www.neutrinoapi.com/api/html-clean/


```javascript
function hTMLClean(content, outputType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | The HTML content. This can be either a URL to load HTML from or an actual HTML content string |
| outputType |  ``` Required ```  | The level of sanitization, possible values are:<br/><b>plain-text</b>: reduce the content to plain text only (no HTML tags at all)<br/><br/><b>simple-text</b>: allow only very basic text formatting tags like b, em, i, strong, u<br/><br/><b>basic-html</b>: allow advanced text formatting and hyper links<br/><br/><b>basic-html-with-images</b>: same as basic html but also allows image tags<br/><br/><b>advanced-html</b>: same as basic html with images but also allows many more common HTML tags like table, ul, dl, pre<br/> |



#### Example Usage

```javascript

    var content = 'content';
    var outputType = 'output-type';

    TestHelper.getFileContents('url', function(data) {
        controller.hTMLClean(content, outputType, function(error, response, context) {

        });
    });
```



### <a name="u_rl_info"></a>![Method: ](https://apidocs.io/img/method.png ".WWW.uRLInfo") uRLInfo

> Parse, analyze and retrieve content from the supplied URL. See: https://www.neutrinoapi.com/api/url-info/


```javascript
function uRLInfo(url, fetchContent, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| url |  ``` Required ```  | The URL to probe |
| fetchContent |  ``` Optional ```  ``` DefaultValue ```  | If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content (e.g. with the HTML Extract or HTML Clean APIs) |



#### Example Usage

```javascript

    var url = 'url';
    var fetchContent = true;

    controller.uRLInfo(url, fetchContent, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="imaging"></a>![Class: ](https://apidocs.io/img/class.png ".Imaging") Imaging

### Get singleton instance

The singleton instance of the ``` Imaging ``` class can be accessed from the API Client.

```javascript
var controller = lib.Imaging;
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
| position |  ``` Optional ```  ``` DefaultValue ```  | The position of the watermark image, possible values are:<br/>center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right |
| width |  ``` Optional ```  | If set resize the resulting image to this width (in px) while preserving aspect ratio |
| height |  ``` Optional ```  | If set resize the resulting image to this height (in px) while preserving aspect ratio |



#### Example Usage

```javascript

    var imageUrl = 'image-url';
    var watermarkUrl = 'watermark-url';
    var opacity = 187;
    var format = 'format';
    var position = 'position';
    var width = 187;
    var height = 187;

    TestHelper.getFileContents('url', function(data) {
        controller.imageWatermark(imageUrl, watermarkUrl, opacity, format, position, width, height, function(error, response, context) {

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
| fgColor |  ``` Optional ```  ``` DefaultValue ```  | The QR code foreground color |
| bgColor |  ``` Optional ```  ``` DefaultValue ```  | The QR code background color |



#### Example Usage

```javascript

    var content = 'content';
    var width = 187;
    var height = 187;
    var fgColor = 'fg-color';
    var bgColor = 'bg-color';

    TestHelper.getFileContents('url', function(data) {
        controller.qRCode(content, width, height, fgColor, bgColor, function(error, response, context) {

        });
    });
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
| width |  ``` Required ```  | The width to resize to (in px) while preserving aspect ratio |
| height |  ``` Required ```  | The height to resize to (in px) while preserving aspect ratio |
| format |  ``` Optional ```  ``` DefaultValue ```  | The output image format, can be either png or jpg |



#### Example Usage

```javascript

    var imageUrl = 'image-url';
    var width = 187;
    var height = 187;
    var format = 'format';

    TestHelper.getFileContents('url', function(data) {
        controller.imageResize(imageUrl, width, height, format, function(error, response, context) {

        });
    });
```



### <a name="h_tml5_render"></a>![Method: ](https://apidocs.io/img/method.png ".Imaging.hTML5Render") hTML5Render

> Render HTML content to PDF, JPG or PNG. See: https://www.neutrinoapi.com/api/html5-render/


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
| renderDelay |  ``` Optional ```  ``` DefaultValue ```  | Number of milliseconds to wait before rendering the page (can be useful for pages with animations etc) |
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
    var margin = 187;
    var marginLeft = 187;
    var marginRight = 187;
    var marginTop = 187;
    var marginBottom = 187;
    var landscape = true;
    var zoom = 187.806259245987;
    var grayscale = true;
    var mediaPrint = true;
    var mediaQueries = true;
    var forms = true;
    var css = 'css';
    var imageWidth = 187;
    var imageHeight = 187;
    var renderDelay = 187;
    var headerTextLeft = 'header-text-left';
    var headerTextCenter = 'header-text-center';
    var headerTextRight = 'header-text-right';
    var headerSize = 187;
    var headerFont = 'header-font';
    var headerFontSize = 187;
    var headerLine = true;
    var footerTextLeft = 'footer-text-left';
    var footerTextCenter = 'footer-text-center';
    var footerTextRight = 'footer-text-right';
    var footerSize = 187;
    var footerFont = 'footer-font';
    var footerFontSize = 187;
    var footerLine = true;
    var pageWidth = 187;
    var pageHeight = 187;

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

### <a name="phone_verify"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.phoneVerify") phoneVerify

> Make an automated call to any valid phone number and playback a unique security code. See: https://www.neutrinoapi.com/api/phone-verify/


```javascript
function phoneVerify(number, codeLength, securityCode, playbackDelay, countryCode, languageCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number to send the verification code to |
| codeLength |  ``` Optional ```  ``` DefaultValue ```  | The number of digits to use in the security code (between 4 and 12) |
| securityCode |  ``` Optional ```  | Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code |
| playbackDelay |  ``` Optional ```  ``` DefaultValue ```  | The delay in milliseconds between the playback of each security code |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country.<br/>If not set numbers are assumed to be in international format (with or without the leading + sign) |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to playback the verification code in, available languages are:<ul><li>de - German</li><li>en - English</li><li>es - Spanish</li><li>fr - French</li><li>it - Italian</li><li>pt - Portuguese</li><li>ru - Russian</li></ul> |



#### Example Usage

```javascript

    var number = 'number';
    var codeLength = 187;
    var securityCode = 187;
    var playbackDelay = 187;
    var countryCode = 'country-code';
    var languageCode = 'language-code';

    controller.phoneVerify(number, codeLength, securityCode, playbackDelay, countryCode, languageCode, function(error, response, context) {

    
    });
```



### <a name="s_ms_message"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.sMSMessage") sMSMessage

> Send a free-form message to any mobile device via SMS. See: https://www.neutrinoapi.com/api/sms-message/


```javascript
function sMSMessage(number, message, countryCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number to send a message to |
| message |  ``` Required ```  | The SMS message to send. Messages are truncated to a maximum of 150 characters for ASCII content OR 70 characters for UTF content |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country.<br/>If not set numbers are assumed to be in international format (with or without the leading + sign) |



#### Example Usage

```javascript

    var number = 'number';
    var message = 'message';
    var countryCode = 'country-code';

    controller.sMSMessage(number, message, countryCode, function(error, response, context) {

    
    });
```



### <a name="s_ms_verify"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.sMSVerify") sMSVerify

> Send a unique security code to any mobile device via SMS. See: https://www.neutrinoapi.com/api/sms-verify/


```javascript
function sMSVerify(number, codeLength, securityCode, countryCode, languageCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number to send a verification code to |
| codeLength |  ``` Optional ```  ``` DefaultValue ```  | The number of digits to use in the security code (must be between 4 and 12) |
| securityCode |  ``` Optional ```  | Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country.<br/>If not set numbers are assumed to be in international format (with or without the leading + sign) |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to send the verification code in, available languages are:<ul><li>de - German</li><li>en - English</li><li>es - Spanish</li><li>fr - French</li><li>it - Italian</li><li>pt - Portuguese</li><li>ru - Russian</li></ul> |



#### Example Usage

```javascript

    var number = 'number';
    var codeLength = 187;
    var securityCode = 187;
    var countryCode = 'country-code';
    var languageCode = 'language-code';

    controller.sMSVerify(number, codeLength, securityCode, countryCode, languageCode, function(error, response, context) {

    
    });
```



### <a name="verify_security_code"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.verifySecurityCode") verifySecurityCode

> Check if a security code from one of the verify APIs is valid. See: https://www.neutrinoapi.com/api/verify-security-code/


```javascript
function verifySecurityCode(securityCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| securityCode |  ``` Required ```  | The security code to verify |



#### Example Usage

```javascript

    var securityCode = 'security-code';

    controller.verifySecurityCode(securityCode, function(error, response, context) {

    
    });
```



### <a name="phone_playback"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.phonePlayback") phonePlayback

> Make an automated call to any valid phone number and playback an audio message. See: https://www.neutrinoapi.com/api/phone-playback/


```javascript
function phonePlayback(number, audioUrl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number to call. Must be in valid international format |
| audioUrl |  ``` Required ```  | A URL to a valid audio file. Accepted audio formats are:<ul><li>MP3</li><li>WAV</li><li>OGG</ul></ul>You can use the following MP3 URL for testing:<br/>https://www.neutrinoapi.com/test-files/test1.mp3 |



#### Example Usage

```javascript

    var number = 'number';
    var audioUrl = 'audio-url';

    controller.phonePlayback(number, audioUrl, function(error, response, context) {

    
    });
```



### <a name="h_lr_lookup"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.hLRLookup") hLRLookup

> Connect to the global mobile cellular network and retrieve the status of a mobile device. See: https://www.neutrinoapi.com/api/hlr-lookup/


```javascript
function hLRLookup(number, countryCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | A phone number |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country.<br/>If not set numbers are assumed to be in international format (with or without the leading + sign) |



#### Example Usage

```javascript

    var number = 'number';
    var countryCode = 'country-code';

    controller.hLRLookup(number, countryCode, function(error, response, context) {

    
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
| customerIp |  ``` Optional ```  | Pass in the customers IP address and we will return some extra information about them |



#### Example Usage

```javascript

    var binNumber = 'bin-number';
    var customerIp = 'customer-ip';

    controller.bINLookup(binNumber, customerIp, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="geolocation"></a>![Class: ](https://apidocs.io/img/class.png ".Geolocation") Geolocation

### Get singleton instance

The singleton instance of the ``` Geolocation ``` class can be accessed from the API Client.

```javascript
var controller = lib.Geolocation;
```

### <a name="geocode_address"></a>![Method: ](https://apidocs.io/img/method.png ".Geolocation.geocodeAddress") geocodeAddress

> Geocode an address, partial address or just the name of a place. See: https://www.neutrinoapi.com/api/geocode-address/


```javascript
function geocodeAddress(address, countryCode, languageCode, fuzzySearch, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| address |  ``` Required ```  | The address, partial address or name of a place to try and locate |
| countryCode |  ``` Optional ```  | The ISO 2-letter country code to be biased towards (the default is no country bias) |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to display results in, available languages are:<ul><li>de, en, es, fr, it, pt, ru</li></ul> |
| fuzzySearch |  ``` Optional ```  ``` DefaultValue ```  | If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. We use a combination of approximate string matching and data cleansing to find possible location matches |



#### Example Usage

```javascript

    var address = 'address';
    var countryCode = 'country-code';
    var languageCode = 'language-code';
    var fuzzySearch = true;

    controller.geocodeAddress(address, countryCode, languageCode, fuzzySearch, function(error, response, context) {

    
    });
```



### <a name="i_p_info"></a>![Method: ](https://apidocs.io/img/method.png ".Geolocation.iPInfo") iPInfo

> Get location information about an IP address and do reverse DNS (PTR) lookups. See: https://www.neutrinoapi.com/api/ip-info/


```javascript
function iPInfo(ip, reverseLookup, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ip |  ``` Required ```  | IPv4 or IPv6 address |
| reverseLookup |  ``` Optional ```  ``` DefaultValue ```  | Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it |



#### Example Usage

```javascript

    var ip = 'ip';
    var reverseLookup = true;

    controller.iPInfo(ip, reverseLookup, function(error, response, context) {

    
    });
```



### <a name="geocode_reverse"></a>![Method: ](https://apidocs.io/img/method.png ".Geolocation.geocodeReverse") geocodeReverse

> Convert a geographic coordinate (latitude and longitude) into a real world address or location. See: https://www.neutrinoapi.com/api/geocode-reverse/


```javascript
function geocodeReverse(latitude, longitude, languageCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| latitude |  ``` Required ```  | The location latitude in decimal degrees format |
| longitude |  ``` Required ```  | The location longitude in decimal degrees format |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to display results in, available languages are:<ul><li>de, en, es, fr, it, pt, ru</li></ul> |



#### Example Usage

```javascript

    var latitude = 'latitude';
    var longitude = 'longitude';
    var languageCode = 'language-code';

    controller.geocodeReverse(latitude, longitude, languageCode, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="security_and_networking"></a>![Class: ](https://apidocs.io/img/class.png ".SecurityAndNetworking") SecurityAndNetworking

### Get singleton instance

The singleton instance of the ``` SecurityAndNetworking ``` class can be accessed from the API Client.

```javascript
var controller = lib.SecurityAndNetworking;
```

### <a name="i_p_blocklist"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.iPBlocklist") iPBlocklist

> The IP Blocklist API will detect potentially malicious or dangerous IP addresses. See: https://www.neutrinoapi.com/api/ip-blocklist/


```javascript
function iPBlocklist(ip, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ip |  ``` Required ```  | An IPv4 or IPv6 address |



#### Example Usage

```javascript

    var ip = 'ip';

    controller.iPBlocklist(ip, function(error, response, context) {

    
    });
```



### <a name="email_verify"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.emailVerify") emailVerify

> SMTP based email address verification. See: https://www.neutrinoapi.com/api/email-verify/


```javascript
function emailVerify(email, fixTypos, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | An email address |
| fixTypos |  ``` Optional ```  ``` DefaultValue ```  | Automatically attempt to fix typos in the address |



#### Example Usage

```javascript

    var email = 'email';
    var fixTypos = true;

    controller.emailVerify(email, fixTypos, function(error, response, context) {

    
    });
```



### <a name="host_reputation"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.hostReputation") hostReputation

> Check the reputation of an IP address, domain name, FQDN or URL against a comprehensive list of blacklists and blocklists. See: https://www.neutrinoapi.com/api/host-reputation/


```javascript
function hostReputation(host, listRating, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| host |  ``` Required ```  | An IP address, domain name, FQDN or URL.<br/>If you supply a domain/URL it will be checked against the URI DNSBL lists |
| listRating |  ``` Optional ```  ``` DefaultValue ```  | Only check lists with this rating or better |



#### Example Usage

```javascript

    var host = 'host';
    var listRating = 187;

    controller.hostReputation(host, listRating, function(error, response, context) {

    
    });
```



### <a name="i_p_probe"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.iPProbe") iPProbe

> Analyze and extract provider information for an IP address. See: https://www.neutrinoapi.com/api/ip-probe/


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



[Back to List of Controllers](#list_of_controllers)

## <a name="data_tools"></a>![Class: ](https://apidocs.io/img/class.png ".DataTools") DataTools

### Get singleton instance

The singleton instance of the ``` DataTools ``` class can be accessed from the API Client.

```javascript
var controller = lib.DataTools;
```

### <a name="user_agent_info"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.userAgentInfo") userAgentInfo

> Parse, validate and get detailed user-agent information from a user agent string. See: https://www.neutrinoapi.com/api/user-agent-info/


```javascript
function userAgentInfo(userAgent, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userAgent |  ``` Required ```  | A user agent string |



#### Example Usage

```javascript

    var userAgent = 'user-agent';

    controller.userAgentInfo(userAgent, function(error, response, context) {

    
    });
```



### <a name="phone_validate"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.phoneValidate") phoneValidate

> Parse, validate and get location information about a phone number. See: https://www.neutrinoapi.com/api/phone-validate/


```javascript
function phoneValidate(number, countryCode, ip, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | A phone number. This can be in international format (E.164) or local format. If passing local format you should use the 'country-code' or 'ip' options as well |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country.<br/>If not set numbers are assumed to be in international format (with or without the leading + sign) |
| ip |  ``` Optional ```  | Pass in a users IP address and we will assume numbers are based in the country of the IP address |



#### Example Usage

```javascript

    var number = 'number';
    var countryCode = 'country-code';
    var ip = 'ip';

    controller.phoneValidate(number, countryCode, ip, function(error, response, context) {

    
    });
```



### <a name="convert"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.convert") convert

> A powerful unit conversion tool. See: https://www.neutrinoapi.com/api/convert/


```javascript
function convert(fromValue, fromType, toType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fromValue |  ``` Required ```  | The value to convert from (e.g. 10.95) |
| fromType |  ``` Required ```  | The type of the value to convert from (e.g. USD) |
| toType |  ``` Required ```  | The type to convert to (e.g. EUR) |



#### Example Usage

```javascript

    var fromValue = 'from-value';
    var fromType = 'from-type';
    var toType = 'to-type';

    controller.convert(fromValue, fromType, toType, function(error, response, context) {

    
    });
```



### <a name="bad_word_filter"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.badWordFilter") badWordFilter

> Detect bad words, swear words and profanity in a given text. See: https://www.neutrinoapi.com/api/bad-word-filter/


```javascript
function badWordFilter(content, censorCharacter, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | The content to scan. This can be either a URL to load content from or an actual content string |
| censorCharacter |  ``` Optional ```  | The character to use to censor out the bad words found |



#### Example Usage

```javascript

    var content = 'content';
    var censorCharacter = 'censor-character';

    controller.badWordFilter(content, censorCharacter, function(error, response, context) {

    
    });
```



### <a name="email_validate"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.emailValidate") emailValidate

> Parse, validate and clean an email address. See: https://www.neutrinoapi.com/api/email-validate/


```javascript
function emailValidate(email, fixTypos, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | An email address |
| fixTypos |  ``` Optional ```  ``` DefaultValue ```  | Automatically attempt to fix typos in the address |



#### Example Usage

```javascript

    var email = 'email';
    var fixTypos = true;

    controller.emailValidate(email, fixTypos, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



