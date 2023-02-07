function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  } else return "Inside";
}

testLogicalOr(15);
