require 'test_helper'

class SongsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get songs_index_url
    assert_response :success
  end

  test "should get new" do
    get songs_new_url
    assert_response :success
  end

  test "should get show" do
    get songs_show_url
    assert_response :success
  end

end
