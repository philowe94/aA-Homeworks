class Queue
    def initialize
      # create ivar to store queue here!
      @stack = []
    end

    def enqueue(el)
      # adds an element to the queue
      @stack.push(el)
    end

    def dequeue
      # removes one element from the queue
      @stack.shift
    end

    def peek
      # returns, but doesn't remove, the top element in the queue
      @stack[0]
    end
end