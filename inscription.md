First the string ord is pushed, to disambiguate inscriptions from other uses of envelopes.

OP_PUSH 1 indicates that the next push contains the content type, and OP_PUSH 0indicates that subsequent data pushes contain the content itself. Multiple data pushes must be used for large inscriptions, as one of taproot's few restrictions is that individual data pushes may not be larger than 520 bytes.

Source:
https://docs.ordinals.com/inscriptions.html


OP_FALSE
OP_IF
  OP_PUSH "ord"
  OP_PUSH 1
  OP_PUSH "text/plain;charset=utf8"
  OP_PUSH 0
  OP_PUSH "tHE tEXt"
OP_ENDIF



