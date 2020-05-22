module.exports = function(){

    Boolean.prototype.random = function(){
        return Boolean(Math.round(Math.random()));
    };

    Boolean.prototype.not = function(){
        return !this;
    };

    Boolean.prototype.stringify = function(){
        return String(this);
    };

    Boolean.prototype.numberify = function(){
        return Number(this);
    };

    Boolean.prototype.arrayify = function(){
        return Array(this);
    };

    Boolean.prototype.true = function(){
        return true;
    };

    Boolean.prototype.false = function(){
        return false;
    };

    Boolean.prototype.and = function(b){
        return this && b;
    };

    Boolean.prototype.or = function(b){
        return this || b;
    };

    Boolean.prototype.equals = function(b){
        return this == b;
    };

    Boolean.prototype.xor = function(b){
        return this != b;
    };

}