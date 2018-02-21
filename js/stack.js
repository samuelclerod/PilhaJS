function Stack() {
    var items = [];
    this.push = function(element) {
        items.push(element);
    };
    this.pop = function() {
        return (items.pop());
    };
    this.peek = function() {
        return items[items.length - 1];
    };
    this.isEmpty = function() {
        return items.length == 0;
    }
    this.size = function() {
        return items.length;
    }
    this.clear = function() {
        items = []
    }
    this.print = function(separator) {
        if (!separator) separator = ''
        var s = ''
        for (var i = items.length - 1; i >= 0; i--) {
            s += items[i] + " " + separator;
        }
        return s;
    }
}