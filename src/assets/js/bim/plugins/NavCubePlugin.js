﻿var NavCubeTextures = {
    en: "data:image/png;base64,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",
};

const F_SHADER = " precision mediump float; uniform float uAlpha; uniform sampler2D uTexture; uniform bool uColorCoding; uniform float uHighlighting; varying vec2 vTexCoord; varying vec4 vIdColor; void main(void) { if (uColorCoding) { gl_FragColor = vIdColor; } else { vec4 pixel = texture2D(uTexture, vTexCoord); if (vIdColor.x < 0.0) { gl_FragColor = vec4(pixel.rgb * uHighlighting, uAlpha); } else { gl_FragColor = vec4(pixel.rgb, uAlpha); } } }";
const V_SHADER = " attribute highp vec3 aVertex; attribute highp vec2 aTexCoord; attribute highp float aId; uniform mat3 uRotation; uniform mat4 uPMatrix; uniform bool uColorCoding; uniform float uSelection; varying vec2 vTexCoord; varying vec4 vIdColor; vec4 getIdColor(float id){ float product = floor(id + 0.5); float B = floor(product / (256.0*256.0)); float G = floor((product - B * 256.0*256.0) / 256.0); float R = mod(product, 256.0); return vec4(R / 255.0, G / 255.0, B / 255.0, 1.0); } void main(void) { vec4 point = vec4(uRotation * aVertex, 1.0); gl_Position = uPMatrix * point; vTexCoord = aTexCoord; if (uColorCoding) { vIdColor = getIdColor(aId); return; } bool isSelected = abs(uSelection - aId) < 0.1; if (isSelected){ vIdColor = vec4(-1.0, -1.0, -1.0, -1.0); } else{ vIdColor = vec4(1.0, 1.0, 1.0, 1.0); } }";


function NavCube(image) {
    this.name = "navCube";
    this._image = image;

    this.TOP = 1600000;
    this.BOTTOM = 1600001;
    this.LEFT = 1600002;
    this.RIGHT = 1600003;
    this.FRONT = 1600004;
    this.BACK = 1600005;

    this.TOP_LEFT_FRONT = 1600006;
    this.TOP_RIGHT_FRONT = 1600007;
    this.TOP_LEFT_BACK = 1600008;
    this.TOP_RIGHT_BACK = 1600009;
    this.BOTTOM_LEFT_FRONT = 1600010;
    this.BOTTOM_RIGHT_FRONT = 1600011;
    this.BOTTOM_LEFT_BACK = 1600012;
    this.BOTTOM_RIGHT_BACK = 1600013;

    this.TOP_LEFT = 1600014;
    this.TOP_RIGHT = 1600015;
    this.TOP_FRONT = 1600016;
    this.TOP_BACK = 1600017;
    this.BOTTOM_LEFT = 1600018;
    this.BOTTOM_RIGHT = 1600019;
    this.BOTTOM_FRONT = 1600020;
    this.BOTTOM_BACK = 1600021;

    this.FRONT_RIGHT = 1600022;
    this.FRONT_LEFT = 1600023;
    this.BACK_RIGHT = 1600024;
    this.BACK_LEFT = 1600025;


    this._initialized = false;

    /**
    * Size of the cube relative to the size of viewer canvas. This has to be a positive number between [0,1] Default value is 0.15. 
    * @member {Number} NavCube#ratio
    */
    this.ratio = 0.07;

    /**
    * Active parts of the navigation cube are highlighted so that user can recognize which part is active. 
    * This should be a positive number between [0,2]. If the value is less than 1 active area is darker.
    * If the value is greater than 1 active area is lighter. Default value is 1.2. 
    * @member {Number} NavCube#highlighting
    */
    this.highlighting = 1.5;

    /**
    * Navigation cube has two transparency states. One is when user hovers over the cube and the second when the cursor is anywhere else.
    * This is for the hovering shate and it should be a positive number between [0,1]. If the value is less than 1 cube will be semitransparent 
    * when user hovers over. Default value is 1.0. 
    * @member {Number} NavCube#activeAlpha
    */
    this.activeAlpha = 1.0;

    /**
    * Navigation cube has two transparency states. One is when user hovers over the cube and the second when the cursor is anywhere else.
    * This is for the non-hovering shate and it should be a positive number between [0,1]. If the value is less than 1 cube will be semitransparent 
    * when user is not hovering over. Default value is 0.3. 
    * @member {Number} NavCube#passiveAlpha
    */
    this.passiveAlpha = 0.9;

    /**
    * It is possible to place navigation cube to any of the corners of the canvas using this property. Default value is cube.BOTTOM_RIGHT. 
    * Allowed values are cube.BOTTOM_RIGHT, cube.BOTTOM_LEFT, cube.TOP_RIGHT and cube.TOP_LEFT.
    * @member {Enum} NavCube#position
    */
    this.position = this.BOTTOM_RIGHT;
}

NavCube.prototype.init = function (xviewer) {
    var self = this;
    this.viewer = xviewer;
    var gl = this.viewer._gl;

    //create own shader 
    this._shader = null;
    this._initShader();
    
    this._alpha = this.passiveAlpha;
    this._selection = 0.0;

    //set own shader for init
    gl.useProgram(this._shader);

    //create uniform and attribute pointers
    this._pMatrixUniformPointer = gl.getUniformLocation(this._shader, "uPMatrix");
    this._rotationUniformPointer = gl.getUniformLocation(this._shader, "uRotation");
    this._colourCodingUniformPointer = gl.getUniformLocation(this._shader, "uColorCoding");
    this._alphaUniformPointer = gl.getUniformLocation(this._shader, "uAlpha");
    this._selectionUniformPointer = gl.getUniformLocation(this._shader, "uSelection");
    this._textureUniformPointer = gl.getUniformLocation(this._shader, "uTexture");
    this._highlightingUniformPointer = gl.getUniformLocation(this._shader, "uHighlighting");

    this._vertexAttrPointer = gl.getAttribLocation(this._shader, "aVertex"),
    this._texCoordAttrPointer = gl.getAttribLocation(this._shader, "aTexCoord"),
    this._idAttrPointer = gl.getAttribLocation(this._shader, "aId"),
    gl.enableVertexAttribArray(this._vertexAttrPointer);
    gl.enableVertexAttribArray(this._texCoordAttrPointer);
    gl.enableVertexAttribArray(this._idAttrPointer);

    //feed data into the GPU and keep pointers
    this._indexBuffer = gl.createBuffer();
    this._vertexBuffer = gl.createBuffer();
    this._texCoordBuffer = gl.createBuffer();
    this._idBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.txtCoords, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._idBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.ids(), gl.STATIC_DRAW);

    //create texture
    var self = this;
    this._texture = gl.createTexture();
    if (typeof (this._image) === "undefined") {
        //add HTML UI to viewer port
        var data = NavCubeTextures["en"];
        var image = new Image();
        self._image = image;
        image.addEventListener("load", function () {
            //load image texture into GPU
            gl.bindTexture(gl.TEXTURE_2D, self._texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self._image);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
            gl.generateMipmap(gl.TEXTURE_2D);
        });
        image.src = data;
    } else {
        //load image texture into GPU
        gl.bindTexture(gl.TEXTURE_2D, self._texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self._image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
    }

   


    //reset original shader program 
    gl.useProgram(this.viewer._shaderProgram);

    xviewer._canvas.addEventListener('mousemove', function (event) {
        var startX = event.clientX;
        var startY = event.clientY;

        //get coordinates within canvas (with the right orientation)
        var r = xviewer._canvas.getBoundingClientRect();
        var viewX = startX - r.left;
        var viewY = xviewer._height - (startY - r.top);

        //this is for picking
        var id = xviewer._getID(viewX, viewY);

        if (id >= self.TOP && id <= self.BACK_LEFT) {
            self._alpha = self.activeAlpha;
            self._selection = id;
        } else {
            self._alpha = self.passiveAlpha;
            self._selection = 0;
        }
    }, true);

    self._drag = false;

    xviewer._canvas.addEventListener('mousedown', function (event) {
        var startX = event.clientX;
        var startY = event.clientY;

        //get coordinates within canvas (with the right orientation)
        var r = xviewer._canvas.getBoundingClientRect();
        var viewX = startX - r.left;
        var viewY = xviewer._height - (startY - r.top);

        //this is for picking
        var id = xviewer._getID(viewX, viewY);

        if (id >= self.TOP && id <= self.BACK_LEFT) {
            //change viewer navigation mode to be 'orbit'
            self._drag = true;
            self._originalNavigation = xviewer.navigationMode;
            xviewer.navigationMode = "orbit";
        }
    }, true);

    window.addEventListener('mouseup', function (event) {
        if (self._drag === true) {
            xviewer.navigationMode = self._originalNavigation;
        }
        self._drag = false;
    }, true);

    this._initialized = true;

}

NavCube.prototype.onBeforeDraw = function () { };

NavCube.prototype.onBeforePick = function (id) {
    if (id >= this.TOP && id <= this.BACK_LEFT) {

        var dir = vec3.create();
       
        var distance = this.viewer._distance ;
        var diagonalRatio = 1.0;

        switch (id) {
            case this.TOP:
                this.viewer.show('top');
                return true;
            case this.BOTTOM:
                this.viewer.show('bottom');
                return true;
            case this.LEFT:
                this.viewer.show('left');
                return true;
            case this.RIGHT:
                this.viewer.show('right');
                return true;
            case this.FRONT:
                this.viewer.show('front');
                return true;
            case this.BACK:
                this.viewer.show('back');
                return true;
            case this.TOP_LEFT_FRONT:
                dir = vec3.fromValues(-1, -1, 1);
                distance *= diagonalRatio;
                break;
            case this.TOP_RIGHT_FRONT:
                dir = vec3.fromValues(1, -1, 1);
                distance *= diagonalRatio;
                break;
            case this.TOP_LEFT_BACK:
                dir = vec3.fromValues(-1, 1, 1);
                distance *= diagonalRatio;
                break;
            case this.TOP_RIGHT_BACK:
                dir = vec3.fromValues(1, 1, 1);
                distance *= diagonalRatio;
                break;
            case this.BOTTOM_LEFT_FRONT:
                dir = vec3.fromValues(-1, -1, -1);
                distance *= diagonalRatio;
                break;
            case this.BOTTOM_RIGHT_FRONT:
                dir = vec3.fromValues(1, -1, -1);
                distance *= diagonalRatio;
                break;
            case this.BOTTOM_LEFT_BACK:
                dir = vec3.fromValues(-1, 1, -1);
                distance *= diagonalRatio;
                break;
            case this.BOTTOM_RIGHT_BACK:
                dir = vec3.fromValues(1, 1, -1);
                distance *= diagonalRatio;
                break;
            case this.TOP_LEFT:
                dir = vec3.fromValues(-1, 0, 1);
                distance *= diagonalRatio;
                break;
            case this.TOP_RIGHT:
                dir = vec3.fromValues(1, 0, 1);
                distance *= diagonalRatio;
                break;
            case this.TOP_FRONT:
                dir = vec3.fromValues(0, -1, 1);
                distance *= diagonalRatio;
                break;
            case this.TOP_BACK:
                dir = vec3.fromValues(0, 1, 1);
                distance *= diagonalRatio;
                break;
            case this.BOTTOM_LEFT:
                dir = vec3.fromValues(-1, 0, -1);
                distance *= diagonalRatio;
                break;
            case this.BOTTOM_RIGHT:
                dir = vec3.fromValues(1, 0, -1);
                break;
            case this.BOTTOM_FRONT:
                dir = vec3.fromValues(0, -1, -1);
                distance *= diagonalRatio;
                break;
            case this.BOTTOM_BACK:
                dir = vec3.fromValues(0, 1, -1);
                distance *= diagonalRatio;
                break;
            case this.FRONT_RIGHT:
                dir = vec3.fromValues(1, -1, 0);
                distance *= diagonalRatio;
                break;
            case this.FRONT_LEFT:
                dir = vec3.fromValues(-1, -1, 0);
                distance *= diagonalRatio;
                break;
            case this.BACK_RIGHT:
                dir = vec3.fromValues(1, 1, 0);
                distance *= diagonalRatio;
                break;
            case this.BACK_LEFT:
                dir = vec3.fromValues(-1, 1, 0);
                distance *= diagonalRatio;
                break;
            default:
                break;
        }

        var o = this.viewer._origin;
        var heading = vec3.fromValues(0, 0, 1);
        var origin = vec3.fromValues(o[0], o[1], o[2]);

        dir = vec3.normalize(vec3.create(), dir);
        var shift = vec3.scale(vec3.create(), dir, distance);
        var camera = vec3.add(vec3.create(), origin, shift);

        //use look-at function to set up camera and target
        mat4.lookAt(this.viewer._mvMatrix, camera, origin, heading);
        return true;
    }
    return false;
};

NavCube.prototype.onAfterDraw = function() {
    var gl = this.setActive();
    //set uniform for colour coding to false
    gl.uniform1i(this._colourCodingUniformPointer, 0);
    this.draw();
    this.setInactive();
};

NavCube.prototype.onBeforeDrawId = function () { };

NavCube.prototype.onAfterDrawId = function () {
    var gl = this.setActive();
    //set uniform for colour coding to true
    gl.uniform1i(this._colourCodingUniformPointer, 1);
    this.draw();
    this.setInactive();
};

NavCube.prototype.onBeforeGetId = function(id) { }

NavCube.prototype.setActive = function() {
    var gl = this.viewer._gl;
    //set own shader
    gl.useProgram(this._shader);

    return gl;
};

NavCube.prototype.setInactive = function () {
    var gl = this.viewer._gl;
    //set viewer shader
    gl.useProgram(this.viewer._shaderProgram);
};

NavCube.prototype.draw = function () {
    if (!this._initialized) return;
    if(this.viewer._handles.length == 0) return;

    var gl = this.viewer._gl;

    //set navigation data from BimiViewer to this shader
    var pMatrix = mat4.create();
    var height = 1.0 / this.ratio;
    //根据height的比例计算出一比例对应的width的值
    var width = height / this.viewer._height * this.viewer._width;
    //create orthogonal projection matrix
    switch (this.position) {
        case this.BOTTOM_RIGHT:
            mat4.ortho(pMatrix,
                (this.ratio - 1.0) * width, //left
                this.ratio * width, //right
                this.ratio * -1.0 * height, //bottom
                (1.0 - this.ratio) * height,  //top
                -1,  //near
                1); //far
            break;
        case this.BOTTOM_LEFT:
            mat4.ortho(pMatrix,
                -1.0 * this.ratio * width, //left
                (1.0 - this.ratio) * width, //right
                this.ratio * -1.0 * height, //bottom
                (1.0 - this.ratio) * height,  //top
                -1,  //near
                1); //far
            break;
        case this.TOP_LEFT:
            mat4.ortho(pMatrix,
                -1.0 * this.ratio * width, //left
                (1.0 - this.ratio) * width, //right
                (this.ratio - 1.0) * height, //bottom
                this.ratio * height,  //top
                -1,  //near
                1); //far
            break;
        case this.TOP_RIGHT:
            mat4.ortho(pMatrix,
                (this.ratio - 1.0) * width, //left
                this.ratio * width, //right
                (this.ratio - 1.0) * height, //bottom
                this.ratio * height,  //top
                -1,  //near
                1); //far
            break;
    default:
    }

    //extract just a rotation from model-view matrix
    var rotation = mat3.fromMat4(mat3.create(), this.viewer._mvMatrix);
    gl.uniformMatrix4fv(this._pMatrixUniformPointer, false, pMatrix);
    gl.uniformMatrix3fv(this._rotationUniformPointer, false, rotation);
    gl.uniform1f(this._alphaUniformPointer, this._alpha);
    gl.uniform1f(this._highlightingUniformPointer, this.highlighting);
    gl.uniform1f(this._selectionUniformPointer, this._selection);

    //bind data buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
    gl.vertexAttribPointer(this._vertexAttrPointer, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._idBuffer);
    gl.vertexAttribPointer(this._idAttrPointer, 1, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._texCoordBuffer);
    gl.vertexAttribPointer(this._texCoordAttrPointer, 2, gl.FLOAT, false, 0, 0);

    //bind texture
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this._texture);
    gl.uniform1i(this._textureUniformPointer, 1);

    var cfEnabled = gl.getParameter(gl.CULL_FACE);
    if (!cfEnabled) gl.enable(gl.CULL_FACE);

    //draw the cube as an element array
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
    gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);

    if (!cfEnabled) gl.disable(gl.CULL_FACE);

};

NavCube.prototype._initShader = function () {

    var gl = this.viewer._gl;
    var viewer = this.viewer;
    var compile = function (shader, code) {
        gl.shaderSource(shader, code);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            viewer._error(gl.getShaderInfoLog(shader));
            return null;
        }
    }
    
    //fragment shader
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    compile(fragmentShader,F_SHADER);

    //vertex shader (the more complicated one)
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    compile(vertexShader, V_SHADER);

    //link program
    this._shader = gl.createProgram();
    gl.attachShader(this._shader, vertexShader);
    gl.attachShader(this._shader, fragmentShader);
    gl.linkProgram(this._shader);

    if (!gl.getProgramParameter(this._shader, gl.LINK_STATUS)) {
        viewer._error('Could not initialise shaders for a navigation cube plugin');
    }
};


NavCube.prototype.vertices = new Float32Array([
      // Front face
      -0.3, -0.5, -0.3,
       0.3, -0.5, -0.3,
       0.3, -0.5,  0.3, 
      -0.3, -0.5,  0.3, 

      // Back face
      -0.3, 0.5, -0.3, 
      -0.3, 0.5,  0.3,  
       0.3, 0.5,  0.3,  
       0.3, 0.5, -0.3, 

      
      // Top face
      -0.3, -0.3, 0.5, 
       0.3, -0.3, 0.5, 
       0.3,  0.3, 0.5,  
      -0.3,  0.3, 0.5,  

      // Bottom face
      -0.3, -0.3, -0.5,
      -0.3,  0.3, -0.5, 
       0.3,  0.3, -0.5, 
       0.3, -0.3, -0.5,

      // Right face
       0.5, -0.3, -0.3,
       0.5,  0.3, -0.3, 
       0.5,  0.3,  0.3,  
       0.5, -0.3,  0.3, 

      // Left face
      -0.5, -0.3, -0.3,
      -0.5, -0.3,  0.3, 
      -0.5,  0.3,  0.3,  
      -0.5, 0.3, -0.3,

      //top - left - front (--+)
      -0.5, -0.5, 0.5, 
      -0.3, -0.5, 0.5,
      -0.3, -0.3, 0.5,
      -0.5, -0.3, 0.5,

      -0.5, -0.5, 0.3,
      -0.5, -0.5, 0.5, 
      -0.5, -0.3, 0.5,
      -0.5, -0.3, 0.3,

      -0.5, -0.5, 0.3,
      -0.3, -0.5, 0.3,
      -0.3, -0.5, 0.5,
      -0.5, -0.5, 0.5, 

      //top-right-front (+-+)
       0.3, -0.5, 0.5,
       0.5, -0.5, 0.5, 
       0.5, -0.3, 0.5,
       0.3, -0.3, 0.5,

       0.5, -0.5, 0.3,
       0.5, -0.3, 0.3,
       0.5, -0.3, 0.5,
       0.5, -0.5, 0.5, 
       
       0.3, -0.5, 0.3,
       0.5, -0.5, 0.3,
       0.5, -0.5, 0.5, 
       0.3, -0.5, 0.5,

       //top-left-back (-++)
       -0.5, 0.3, 0.5,
       -0.3, 0.3, 0.5,
       -0.3, 0.5, 0.5,
       -0.5, 0.5, 0.5,
       
       -0.5, 0.3, 0.3,
       -0.5, 0.3, 0.5,
       -0.5, 0.5, 0.5,
       -0.5, 0.5, 0.3,
       
       -0.5, 0.5, 0.3,
       -0.5, 0.5, 0.5,
       -0.3, 0.5, 0.5,
       -0.3, 0.5, 0.3,
       
       //top-right-back (+++)
       0.3, 0.3, 0.5,
       0.5, 0.3, 0.5,
       0.5, 0.5, 0.5,
       0.3, 0.5, 0.5,

       0.5, 0.3, 0.3,
       0.5, 0.5, 0.3,
       0.5, 0.5, 0.5,
       0.5, 0.3, 0.5,
        
       0.3, 0.5, 0.3,
       0.3, 0.5, 0.5,
       0.5, 0.5, 0.5,
       0.5, 0.5, 0.3,

      //bottom - left - front (---)
      -0.5, -0.5, -0.5,
      -0.3, -0.5, -0.5,
      -0.3, -0.3, -0.5,
      -0.5, -0.3, -0.5,

      -0.5, -0.5, -0.5,
      -0.5, -0.5, -0.3,
      -0.5, -0.3, -0.3,
      -0.5, -0.3, -0.5,

      -0.5, -0.5, -0.5,
      -0.3, -0.5, -0.5,
      -0.3, -0.5, -0.3,
      -0.5, -0.5, -0.3,

      //bottom-right-front (+--)
       0.3, -0.5, -0.5,
       0.5, -0.5, -0.5,
       0.5, -0.3, -0.5,
       0.3, -0.3, -0.5,

       0.5, -0.5, -0.5,
       0.5, -0.3, -0.5,
       0.5, -0.3, -0.3,
       0.5, -0.5, -0.3,

       0.3, -0.5, -0.5,
       0.5, -0.5, -0.5,
       0.5, -0.5, -0.3,
       0.3, -0.5, -0.3,

       //bottom-left-back (-+-)
       -0.5, 0.3, -0.5,
       -0.3, 0.3, -0.5,
       -0.3, 0.5, -0.5,
       -0.5, 0.5, -0.5,

       -0.5, 0.3, -0.5,
       -0.5, 0.3, -0.3,
       -0.5, 0.5, -0.3,
       -0.5, 0.5, -0.5,

       -0.5, 0.5, -0.5,
       -0.5, 0.5, -0.3,
       -0.3, 0.5, -0.3,
       -0.3, 0.5, -0.5,

       //bottom-right-back (++-)
       0.3, 0.3, -0.5,
       0.5, 0.3, -0.5,
       0.5, 0.5, -0.5,
       0.3, 0.5, -0.5,

       0.5, 0.3, -0.5,
       0.5, 0.5, -0.5,
       0.5, 0.5, -0.3,
       0.5, 0.3, -0.3,

       0.3, 0.5, -0.5,
       0.3, 0.5, -0.3,
       0.5, 0.5, -0.3,
       0.5, 0.5, -0.5,

       //top-right (+0+)
       0.3, -0.3, 0.5,
       0.5, -0.3, 0.5,
       0.5,  0.3, 0.5,
       0.3,  0.3, 0.5,

       0.5, -0.3, 0.3,
       0.5,  0.3, 0.3,
       0.5,  0.3, 0.5,
       0.5, -0.3, 0.5,

       //top-left (-0+)
       -0.5, -0.3, 0.5,
       -0.3, -0.3, 0.5,
       -0.3,  0.3, 0.5,
       -0.5,  0.3, 0.5,

       -0.5, -0.3, 0.3,
       -0.5, -0.3, 0.5,
       -0.5,  0.3, 0.5,
       -0.5, 0.3, 0.3,

       //top-front (0-+)
       -0.3, -0.5, 0.5,
        0.3, -0.5, 0.5,
        0.3, -0.3, 0.5,
       -0.3, -0.3, 0.5,

       -0.3, -0.5, 0.3,
        0.3, -0.5, 0.3,
        0.3, -0.5, 0.5,
       -0.3, -0.5, 0.5,

       //top-back (0++)
       -0.3, 0.3, 0.5,
        0.3, 0.3, 0.5,
        0.3, 0.5, 0.5,
       -0.3, 0.5, 0.5,

       -0.3, 0.5, 0.3,
       -0.3, 0.5, 0.5,
        0.3, 0.5, 0.5,
        0.3, 0.5, 0.3,

       //bottom-right (+0-)
       0.3, -0.3, -0.5,
       0.5, -0.3, -0.5,
       0.5, 0.3,  -0.5,
       0.3, 0.3,  -0.5,

       0.5, -0.3, -0.5,
       0.5, 0.3,  -0.5,
       0.5, 0.3,  -0.3,
       0.5, -0.3, -0.3,

       //bottom-left (-0-)
       -0.5, -0.3, -0.5,
       -0.5,  0.3, -0.5,
       -0.3,  0.3, -0.5,
       -0.3, -0.3, -0.5,

       -0.5, -0.3, -0.5,
       -0.5, -0.3, -0.3,
       -0.5,  0.3, -0.3,
       -0.5,  0.3, -0.5,

       //bottom-front (0--)
       -0.3, -0.5, -0.5,
        0.3, -0.5, -0.5,
        0.3, -0.3, -0.5,
       -0.3, -0.3, -0.5,

       -0.3, -0.5, -0.5,
        0.3, -0.5, -0.5,
        0.3, -0.5, -0.3,
       -0.3, -0.5, -0.3,

       //bottom-back (0+-)
       -0.3, 0.3, -0.5,
        0.3, 0.3, -0.5,
        0.3, 0.5, -0.5,
       -0.3, 0.5, -0.5,

       -0.3, 0.5, -0.5,
       -0.3, 0.5, -0.3,
        0.3, 0.5, -0.3,
        0.3, 0.5, -0.5,

        //front-right (+-0)
        0.3, -0.5, -0.3,
        0.5, -0.5, -0.3,
        0.5, -0.5,  0.3,
        0.3, -0.5,  0.3,

        0.5, -0.5, -0.3,
        0.5, -0.3, -0.3,
        0.5, -0.3,  0.3,
        0.5, -0.5,  0.3,

        //front-left (--0)
        -0.5, -0.5, -0.3,
        -0.3, -0.5, -0.3,
        -0.3, -0.5,  0.3,
        -0.5, -0.5,  0.3,

        -0.5, -0.5, -0.3,
        -0.5, -0.5,  0.3,
        -0.5, -0.3,  0.3,
        -0.5, -0.3, -0.3,

        //back-right (++0)
         0.3, 0.5, -0.3,
         0.3, 0.5,  0.3,
         0.5, 0.5,  0.3,
         0.5, 0.5, -0.3,

         0.5, 0.3, -0.3,
         0.5, 0.5, -0.3,
         0.5, 0.5,  0.3,
         0.5, 0.3,  0.3,

        //back-left (-+0)
        -0.5, 0.5, -0.3,
        -0.5, 0.5,  0.3,
        -0.3, 0.5,  0.3,
        -0.3, 0.5, -0.3,

         -0.5, 0.3, -0.3,
         -0.5, 0.3,  0.3,
         -0.5, 0.5,  0.3,
         -0.5, 0.5, -0.3,
]);


//// Front face
//-0.5, -0.5, -0.5,
// 0.5, -0.5, -0.5,
// 0.5, -0.5, 0.5,
//-0.5, -0.5, 0.5,
//
//// Back face
//-0.5, 0.5, -0.5,
//-0.5, 0.5, 0.5,
// 0.5, 0.5, 0.5,
// 0.5, 0.5, -0.5,
//
//// Top face
//-0.5, -0.5, 0.5,
// 0.5, -0.5, 0.5,
// 0.5, 0.5, 0.5,
//-0.5, 0.5, 0.5,
//
//// Bottom face
//-0.5, -0.5, -0.5,
//-0.5, 0.5, -0.5,
// 0.5, 0.5, -0.5,
// 0.5, -0.5, -0.5,
//
//// Right face
// 0.5, -0.5, -0.5,
// 0.5, 0.5, -0.5,
// 0.5, 0.5, 0.5,
// 0.5, -0.5, 0.5,
//
//// Left face
//-0.5, -0.5, -0.5,
//-0.5, -0.5, 0.5,
//-0.5, 0.5, 0.5,
//-0.5, 0.5, -0.5,

NavCube.prototype.indices = new Uint16Array([
    0, 1, 2, 0, 2, 3, // Front face
    4, 5, 6, 4, 6, 7, // Back face
    8, 9, 10, 8, 10, 11, // Top face
    12, 13, 14, 12, 14, 15, // Bottom face
    16, 17, 18, 16, 18, 19, // Right face
    20, 21, 22, 20, 22, 23, // Left face

    //top - left - front 
    0 + 24, 1 + 24, 2 + 24, 0 + 24, 2 + 24, 3 + 24,
    4 + 24, 5 + 24, 6 + 24, 4 + 24, 6 + 24, 7 + 24,
    8 + 24, 9 + 24, 10 + 24, 8 + 24, 10 + 24, 11 + 24,

    //top-right-front 
    0 + 36, 1 + 36, 2 + 36, 0 + 36, 2 + 36, 3 + 36,
    4 + 36, 5 + 36, 6 + 36, 4 + 36, 6 + 36, 7 + 36,
    8 + 36, 9 + 36, 10 + 36, 8 + 36, 10 + 36, 11 + 36,

    //top-left-back 
    0 + 48, 1 + 48, 2 + 48, 0 + 48, 2 + 48, 3 + 48,
    4 + 48, 5 + 48, 6 + 48, 4 + 48, 6 + 48, 7 + 48,
    8 + 48, 9 + 48, 10 + 48, 8 + 48, 10 + 48, 11 + 48,

    //top-right-back
    0 + 60, 1 + 60, 2 + 60, 0 + 60, 2 + 60, 3 + 60,
    4 + 60, 5 + 60, 6 + 60, 4 + 60, 6 + 60, 7 + 60,
    8 + 60, 9 + 60, 10 + 60, 8 + 60, 10 + 60, 11 + 60,

    //bottom - left - front
    0 + 72, 2 + 72, 1 + 72, 0 + 72, 3 + 72, 2 + 72,
    4 + 72, 5 + 72, 6 + 72, 4 + 72, 6 + 72, 7 + 72,
    8 + 72, 9 + 72, 10 + 72, 8 + 72, 10 + 72, 11 + 72,

    //bottom-right-front 
    0 + 84, 2 + 84, 1 + 84, 0 + 84, 3 + 84, 2 + 84,
    4 + 84, 5 + 84, 6 + 84, 4 + 84, 6 + 84, 7 + 84,
    8 + 84, 9 + 84, 10 + 84, 8 + 84, 10 + 84, 11 + 84,

    //bottom-left-back 
    0 + 96, 2 + 96, 1 + 96, 0 + 96, 3 + 96, 2 + 96,
    4 + 96, 5 + 96, 6 + 96, 4 + 96, 6 + 96, 7 + 96,
    8 + 96, 9 + 96, 10 + 96, 8 + 96, 10 + 96, 11 + 96,

    //bottom-right-back
    0 + 108, 2 + 108, 1 + 108, 0 + 108, 3 + 108, 2 + 108,
    4 + 108, 5 + 108, 6 + 108, 4 + 108, 6 + 108, 7 + 108,
    8 + 108, 9 + 108, 10 + 108, 8 + 108, 10 + 108, 11 + 108,

    //top-right
    0 + 120, 1 + 120, 2 + 120, 0 + 120, 2 + 120, 3 + 120,
    4 + 120, 5 + 120, 6 + 120, 4 + 120, 6 + 120, 7 + 120,

    //top-left
    0 + 128, 1 + 128, 2 + 128, 0 + 128, 2 + 128, 3 + 128,
    4 + 128, 5 + 128, 6 + 128, 4 + 128, 6 + 128, 7 + 128,

    //top-front
    0 + 136, 1 + 136, 2 + 136, 0 + 136, 2 + 136, 3 + 136,
    4 + 136, 5 + 136, 6 + 136, 4 + 136, 6 + 136, 7 + 136,

    //top-back
    0 + 144, 1 + 144, 2 + 144, 0 + 144, 2 + 144, 3 + 144,
    4 + 144, 5 + 144, 6 + 144, 4 + 144, 6 + 144, 7 + 144,

    //bottom-right
    0 + 152, 2 + 152, 1 + 152, 0 + 152, 3 + 152, 2 + 152,
    4 + 152, 5 + 152, 6 + 152, 4 + 152, 6 + 152, 7 + 152,

    //bottom-left
    0 + 160, 1 + 160, 2 + 160, 0 + 160, 2 + 160, 3 + 160,
    4 + 160, 5 + 160, 6 + 160, 4 + 160, 6 + 160, 7 + 160,

    //bottom-front
    0 + 168, 2 + 168, 1 + 168, 0 + 168, 3 + 168, 2 + 168,
    4 + 168, 5 + 168, 6 + 168, 4 + 168, 6 + 168, 7 + 168,

    //bottom-back
    0 + 176, 2 + 176, 1 + 176, 0 + 176, 3 + 176, 2 + 176,
    4 + 176, 5 + 176, 6 + 176, 4 + 176, 6 + 176, 7 + 176,

    //front-right
    0 + 184, 1 + 184, 2 + 184, 0 + 184, 2 + 184, 3 + 184,
    4 + 184, 5 + 184, 6 + 184, 4 + 184, 6 + 184, 7 + 184,

    //front-left
    0 + 192, 1 + 192, 2 + 192, 0 + 192, 2 + 192, 3 + 192,
    4 + 192, 5 + 192, 6 + 192, 4 + 192, 6 + 192, 7 + 192,

    //back-right
    0 + 200, 1 + 200, 2 + 200, 0 + 200, 2 + 200, 3 + 200,
    4 + 200, 5 + 200, 6 + 200, 4 + 200, 6 + 200, 7 + 200,

    //back-left
    0 + 208, 1 + 208, 2 + 208, 0 + 208, 2 + 208, 3 + 208,
    4 + 208, 5 + 208, 6 + 208, 4 + 208, 6 + 208, 7 + 208,
]);

//// Front face
//1.0 / 3.0, 0.0 / 3.0,
//2.0 / 3.0, 0.0 / 3.0,
//2.0 / 3.0, 1.0 / 3.0,
//1.0 / 3.0, 1.0 / 3.0,
//
//// Back face
//1.0, 0.0 / 3.0,
//1.0, 1.0 / 3.0,
//2.0 / 3.0, 1.0 / 3.0,
//2.0 / 3.0, 0.0 / 3.0,
//
//
//// Top face
//2.0 / 3.0, 1.0 / 3.0,
//1.0, 1.0 / 3.0,
//1.0, 2.0 / 3.0,
//2.0 / 3.0, 2.0 / 3.0,
//
//// Bottom face
//0.0, 1.0 / 3.0,
//0.0, 0.0 / 3.0,
//1.0 / 3.0, 0.0 / 3.0,
//1.0 / 3.0, 1.0 / 3.0,
//
//// Right face
//0.0, 1.0 / 3.0,
//1.0 / 3.0, 1.0 / 3.0,
//1.0 / 3.0, 2.0 / 3.0,
//0.0, 2.0 / 3.0,
//
//// Left face
//2.0 / 3.0, 1.0 / 3.0,
//2.0 / 3.0, 2.0 / 3.0,
//1.0 / 3.0, 2.0 / 3.0,
//1.0 / 3.0, 1.0 / 3.0

NavCube.prototype.txtCoords = new Float32Array([
      // Front face
      1.0 / 3.0 + 1.0 / 15.0, 0.0 / 3.0 + 1.0 / 15.0,
      2.0 / 3.0 - 1.0 / 15.0, 0.0 / 3.0 + 1.0 / 15.0,
      2.0 / 3.0 - 1.0 / 15.0, 1.0 / 3.0 - 1.0 / 15.0,
      1.0 / 3.0 + 1.0 / 15.0, 1.0 / 3.0 - 1.0 / 15.0,

      // Back face
      1.0 - 1.0 / 15.0, 0.0 / 3.0 + 1.0 / 15.0,
      1.0 - 1.0 / 15.0, 1.0 / 3.0 - 1.0 / 15.0,
      2.0 / 3.0 + 1.0 / 15.0, 1.0 / 3.0 - 1.0 / 15.0,
      2.0 / 3.0 + 1.0 / 15.0, 0.0 / 3.0 + 1.0 / 15.0,

      
      // Top face
      2.0/3.0 + 1.0 / 15.0, 1.0/3.0 + 1.0 / 15.0,
      1.0     - 1.0 / 15.0,     1.0/3.0 + 1.0 / 15.0,
      1.0     - 1.0 / 15.0,     2.0/3.0 - 1.0 / 15.0,
      2.0/3.0 + 1.0 / 15.0, 2.0/3.0 - 1.0 / 15.0,

      // Bottom face
      0.0 + 1.0 / 15.0, 1.0 / 3.0 - 1.0 / 15.0,
      0.0 + 1.0 / 15.0, 0.0 / 3.0 + 1.0 / 15.0,
      1.0 / 3.0 - 1.0 / 15.0, 0.0 / 3.0 + 1.0 / 15.0,
      1.0 / 3.0 - 1.0 / 15.0, 1.0 / 3.0 - 1.0 / 15.0,

      // Right face
      0.0 + 1.0 / 15.0, 1.0 / 3.0 + 1.0 / 15.0,
      1.0 / 3.0 - 1.0 / 15.0, 1.0 / 3.0 + 1.0 / 15.0,
      1.0 / 3.0 - 1.0 / 15.0, 2.0 / 3.0 - 1.0 / 15.0,
      0.0 + 1.0 / 15.0, 2.0 / 3.0 - 1.0 / 15.0,

      // Left face
      2.0 / 3.0 - 1.0 / 15.0, 1.0 / 3.0 + 1.0 / 15.0,
      2.0 / 3.0 - 1.0 / 15.0, 2.0 / 3.0 - 1.0 / 15.0,
      1.0 / 3.0 + 1.0 / 15.0, 2.0 / 3.0 - 1.0 / 15.0,
      1.0 / 3.0 + 1.0 / 15.0, 1.0 / 3.0 + 1.0 / 15.0,

      //top - left - front 
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,

      //top-right-front 
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,

      //top-left-back 
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,

      //top-right-back 
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,

      //bottom - left - front 
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,

      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,

      //bottom-right-front 
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,

      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,

      //bottom-left-back 
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,

      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,

      //bottom-right-back 
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 30.0,

      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 1.0 / 30.0, 1.0 / 30.0,

      //top-right
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      //top-left
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      //top-front
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,

      //top-back
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,

      //bottom-right
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,

      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      //bottom-left
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,

      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      //bottom-front
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,

      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,

      //bottom-back
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 30.0,

      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,

      //front-right
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,

      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      //front-left
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,

      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      //back-right
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,

      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

      //back-left
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,
      2.0 / 3.0 + 2.0 / 30.0, 1.0 / 30.0,

      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,
      1.0 / 3.0 + 2.0 / 30.0, 1.0 / 3.0 + 1.0 / 30.0,

]);

NavCube.prototype.ids = function() {
    return new Float32Array([
        this.FRONT, // Front face
        this.FRONT,
        this.FRONT,
        this.FRONT,
        this.BACK, // Back face
        this.BACK,
        this.BACK,
        this.BACK,
        this.TOP, // Top face
        this.TOP,
        this.TOP,
        this.TOP,
        this.BOTTOM, // Bottom face
        this.BOTTOM,
        this.BOTTOM,
        this.BOTTOM,
        this.RIGHT, // Right face
        this.RIGHT,
        this.RIGHT,
        this.RIGHT,
        this.LEFT, // Left face
        this.LEFT,
        this.LEFT,
        this.LEFT,
        this.TOP_LEFT_FRONT,
        this.TOP_LEFT_FRONT,
        this.TOP_LEFT_FRONT,
        this.TOP_LEFT_FRONT,
        this.TOP_LEFT_FRONT,
        this.TOP_LEFT_FRONT,
        this.TOP_LEFT_FRONT,
        this.TOP_LEFT_FRONT,
        this.TOP_LEFT_FRONT,
        this.TOP_LEFT_FRONT,
        this.TOP_LEFT_FRONT,
        this.TOP_LEFT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_RIGHT_FRONT,
        this.TOP_LEFT_BACK,
        this.TOP_LEFT_BACK,
        this.TOP_LEFT_BACK,
        this.TOP_LEFT_BACK,
        this.TOP_LEFT_BACK,
        this.TOP_LEFT_BACK,
        this.TOP_LEFT_BACK,
        this.TOP_LEFT_BACK,
        this.TOP_LEFT_BACK,
        this.TOP_LEFT_BACK,
        this.TOP_LEFT_BACK,
        this.TOP_LEFT_BACK,
        this.TOP_RIGHT_BACK,
        this.TOP_RIGHT_BACK,
        this.TOP_RIGHT_BACK,
        this.TOP_RIGHT_BACK,
        this.TOP_RIGHT_BACK,
        this.TOP_RIGHT_BACK,
        this.TOP_RIGHT_BACK,
        this.TOP_RIGHT_BACK,
        this.TOP_RIGHT_BACK,
        this.TOP_RIGHT_BACK,
        this.TOP_RIGHT_BACK,
        this.TOP_RIGHT_BACK,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_LEFT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_RIGHT_FRONT,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_LEFT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.BOTTOM_RIGHT_BACK,
        this.TOP_RIGHT,
        this.TOP_RIGHT,
        this.TOP_RIGHT,
        this.TOP_RIGHT,
        this.TOP_RIGHT,
        this.TOP_RIGHT,
        this.TOP_RIGHT,
        this.TOP_RIGHT,
        this.TOP_LEFT,
        this.TOP_LEFT,
        this.TOP_LEFT,
        this.TOP_LEFT,
        this.TOP_LEFT,
        this.TOP_LEFT,
        this.TOP_LEFT,
        this.TOP_LEFT,
        this.TOP_FRONT,
        this.TOP_FRONT,
        this.TOP_FRONT,
        this.TOP_FRONT,
        this.TOP_FRONT,
        this.TOP_FRONT,
        this.TOP_FRONT,
        this.TOP_FRONT,
        this.TOP_BACK,
        this.TOP_BACK,
        this.TOP_BACK,
        this.TOP_BACK,
        this.TOP_BACK,
        this.TOP_BACK,
        this.TOP_BACK,
        this.TOP_BACK,
        this.BOTTOM_RIGHT,
        this.BOTTOM_RIGHT,
        this.BOTTOM_RIGHT,
        this.BOTTOM_RIGHT,
        this.BOTTOM_RIGHT,
        this.BOTTOM_RIGHT,
        this.BOTTOM_RIGHT,
        this.BOTTOM_RIGHT,
        this.BOTTOM_LEFT,
        this.BOTTOM_LEFT,
        this.BOTTOM_LEFT,
        this.BOTTOM_LEFT,
        this.BOTTOM_LEFT,
        this.BOTTOM_LEFT,
        this.BOTTOM_LEFT,
        this.BOTTOM_LEFT,
        this.BOTTOM_FRONT,
        this.BOTTOM_FRONT,
        this.BOTTOM_FRONT,
        this.BOTTOM_FRONT,
        this.BOTTOM_FRONT,
        this.BOTTOM_FRONT,
        this.BOTTOM_FRONT,
        this.BOTTOM_FRONT,
        this.BOTTOM_BACK,
        this.BOTTOM_BACK,
        this.BOTTOM_BACK,
        this.BOTTOM_BACK,
        this.BOTTOM_BACK,
        this.BOTTOM_BACK,
        this.BOTTOM_BACK,
        this.BOTTOM_BACK,
        this.FRONT_RIGHT,
        this.FRONT_RIGHT,
        this.FRONT_RIGHT,
        this.FRONT_RIGHT,
        this.FRONT_RIGHT,
        this.FRONT_RIGHT,
        this.FRONT_RIGHT,
        this.FRONT_RIGHT,
        this.FRONT_LEFT,
        this.FRONT_LEFT,
        this.FRONT_LEFT,
        this.FRONT_LEFT,
        this.FRONT_LEFT,
        this.FRONT_LEFT,
        this.FRONT_LEFT,
        this.FRONT_LEFT,
        this.BACK_RIGHT,
        this.BACK_RIGHT,
        this.BACK_RIGHT,
        this.BACK_RIGHT,
        this.BACK_RIGHT,
        this.BACK_RIGHT,
        this.BACK_RIGHT,
        this.BACK_RIGHT,
        this.BACK_LEFT,
        this.BACK_LEFT,
        this.BACK_LEFT,
        this.BACK_LEFT,
        this.BACK_LEFT,
        this.BACK_LEFT,
        this.BACK_LEFT,
        this.BACK_LEFT,
    ]);
};

export default NavCube