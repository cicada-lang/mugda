(data Nat () ()
  [zero () Nat]
  [add1 ([prev Nat]) Nat])

(fn my-add1 (-> Nat Nat)
  [(x) (add1 x)])

(fn sub-to-zero (-> Nat Nat)
  [((zero)) zero]
  [((add1 (zero))) zero]
  [((add1 (add1 x))) (sub-to-zero (my-add1 x))])

(sub-to-zero zero)
(sub-to-zero (add1 zero))
(sub-to-zero (add1 (add1 zero)))
(sub-to-zero (add1 (add1 (add1 zero))))
