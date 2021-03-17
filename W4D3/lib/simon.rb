class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @seq = []
    @sequence_length = 1
    @game_over = false
    
  end

  def play
    until @game_over == true
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence 
    require_sequence
    if game_over == false
      round_success_message
      add_random_color
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    print @seq
  end

  def require_sequence
    @seq.each do |color|
      input = gets.chomp
      if color != input
        @game_over == true
        break
      end
    end
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    print "you won the round"
  end

  def game_over_message
    print "game over !"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
