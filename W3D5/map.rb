class Map
    def initialize
      # create ivar to store map here!
      @stack = []
    end

    def set(key,value)
      # adds an element to the queue

        @stack.each.with_index do |kv, i|
            if kv[0] == key
                @stack[i][1] = value
            end
        end
        @stack.push([key,value])
    end

    def get(key)
        idx = nil
        @stack.each.with_index do |kv, i|
            if kv[0] == key
                return kv[1]
            end
        end
        false
    end

    def delete(key)
        idx = nil
        @stack.each.with_index do |kv, i|
            if kv[0] == key
                return @stack.delete_at(i)
            end
        end
        false
    end

    def show
        return self
    end
end