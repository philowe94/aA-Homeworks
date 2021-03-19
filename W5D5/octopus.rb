
fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

#Sluggish Octopus O(n^2)
def sluggish(arr)
    longest = ""
    arr.each do |fish1|
        arr.each do |fish2|
            if fish1.length > fish2.length
                if fish1.length > longest.length
                    longest = fish1
                end
            end
        end
    end
    return longest
end

#Dominant Octopus O(n log n) (merge sort)
def dominant(arr)    
    return arr if count <= 1
    
    midpoint = count / 2
    sorted_left = dominant(arr.take(midpoint))
    sorted_right = dominant(arr.drop(midpoint))

    return merge(sorted_left, sorted_right)[-1]
end

merge(left, right)
    merged = []
    prc = Proc.new { |x, y| x.length <=> y.length  }

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged + left + right
  end

#Clever Octopus O(n)
def clever(arr)
    longest = ""
    arr.each do |el|
        if el > longest
            longest == el
        end
    end
end

#Slow Dance
tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(dir, arr)
    arr.each_with_index do |ele, i|
        if ele == dir
            return i
        end
    end
end

#Constant Dance!
tiles_array = {"up" => 0, "right-up"=> 1, "right"=> 2, "right-down"=> 3, "down"=> 4, "left-down"=> 5, "left"=> 6,  "left-up" => 7}

def slow_dance(dir, arr)
    return arr[dir]
end