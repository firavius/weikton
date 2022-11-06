CreateAndBindNative(spRuntime, 'Format', function(ctx, args) {
  var format = Module.UTF8ToString(Module._context_local_to_physical_address(ctx, args[2]));
  var result = atcprintf(format, ctx, args.slice(3));
  var dest = Module._context_local_to_physical_address(ctx, args[0]);
  return Module.stringToUTF8(result, dest, args[1]);
});

CreateAndBindNative(spRuntime, 'FormatEx', function(ctx, args) {
  var format = Module.UTF8ToString(Module._context_local_to_physical_address(ctx, args[2]));
  var result = atcprintf(format, ctx, args.slice(3));
  var dest = Module._context_local_to_physical_address(ctx, args[0]);
  return Module.stringToUTF8(result, dest, args[1]);
});

CreateAndBindNative(spRuntime, 'StringToInt', function(ctx, args) {
  var str = Module.UTF8ToString(Module._context_local_to_physical_address(ctx, args[0]));
  return parseInt(str) | 0;
});

CreateAndBindNative(spRuntime, 'StringToFloat', function(ctx, args) {
  var str = Module.UTF8ToString(Module._context_local_to_physical_address(ctx, args[0]));
  var floatPtr = Module._malloc(4);
  Module.setValue(floatPtr, parseFloat(str), 'float');
  var intVal = Module.getValue(floatPtr, 'i32');
  Module._free(floatPtr);
  return intVal;
});

CreateAndBindNative(spRuntime, 'StrContains', function(ctx, args) {
  var str = Module.UTF8ToString(Module._context_local_to_physical_address(ctx, args[0]));
  var substr = Module.UTF8ToString(Module._context_local_to_physical_address(ctx, args[1]));
  if (!args[2]) {
    str = str.toLowerCase();
    substr = substr.toLowerCase();
  }
  return str.indexOf(substr);
});
