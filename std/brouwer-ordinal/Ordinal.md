---
title: Brouwer Ordinal
---

This example is taken from the paper,
but I do not know why this datatype is called Brouwer ordinal.

# Ordinal

```mu
(import "../nat/index.mu" Nat)

(data Ordinal () ()
  [ozero () Ordinal]
  [olimit ([f (-> Nat Ordinal)]) Ordinal])
```

# oadd

```mu
(fn oadd (-> Ordinal Ordinal Ordinal)
  [((ozero) y) y]
  [((olimit f) y)
   (olimit (lambda (z) (oadd (f z) y)))])

(define const-ozero (-> Nat Ordinal)
  (lambda (n) ozero))

(oadd ozero ozero)

(oadd (olimit const-ozero) (olimit const-ozero))

(oadd
  (oadd (olimit const-ozero) (olimit const-ozero))
  (oadd (olimit const-ozero) (olimit const-ozero)))
```
