(data Ord Type
  [ozero Ord]
  [olim (-> (-> Nat Ord) Ord)])

(fn addOrd (-> Ord Ord Ord)
  [(addOrd x ozero) x]
  [(addOrd x (olim f)) (olim (lambda (y) (addOrd x (f y))))])

