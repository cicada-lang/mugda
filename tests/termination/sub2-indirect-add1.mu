(data Nat () ()
  [zero () Nat]
  [add1 ([prev Nat]) Nat])

(define my-add1 (-> Nat Nat) add1)

;; (define my-add1 (-> Nat Nat) (lambda (x) (add1 x)))

;; (fn my-add1 (-> Nat Nat) [(x) (add1 x)])

(fn sub2 (-> Nat Nat)
  [((zero)) zero]
  [((add1 (zero))) zero]
  [((add1 (add1 x))) (sub2 (my-add1 x))])

(sub2 (add1 (add1 zero)))
