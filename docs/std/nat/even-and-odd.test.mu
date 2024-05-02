(import "Nat.mu" zero add1)
(import "even-and-odd.mu" even? odd?)

(even? zero)
(even? (add1 zero))
(even? (add1 (add1 zero)))
(even? (add1 (add1 (add1 zero))))

(odd? zero)
(odd? (add1 zero))
(odd? (add1 (add1 zero)))
(odd? (add1 (add1 (add1 zero))))
